import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/route.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { configs } from './config/index.js';
import { errorHandler, AppError } from './middleware/errorHandler.js';
import { requestLogger, notFoundLogger } from './middleware/logger.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(requestLogger);

// Routes
app.use('/users', userRoutes);

// 404 Handler
app.use(notFoundLogger);
app.use((req, res, next) => {
    next(new AppError('Route not found', 404));
});

// Global error handler (must be last)
app.use(errorHandler);

start();

/**
 * Start server and connect to MongoDB
 */
async function start() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(configs.mongo.url);
        console.log('✅ Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`🚀 Server started on port ${PORT}`);
            console.log(`📝 API Documentation: http://localhost:${PORT}/api-docs`);
        });
    } catch (error) {
        console.error('❌ Failed to connect to MongoDB');
        console.error(error);
        process.exit(1);
    }
}
