/**
 * Request validation middleware
 */
import { validateUserRequired, validateUpdatePayload, isValidObjectId } from '../utils/validators.js';
import { AppError } from './errorHandler.js';

/**
 * Middleware to validate create user request
 */
export const validateCreateUser = (req, res, next) => {
    const validation = validateUserRequired(req.body);

    if (!validation.isValid) {
        return next(new AppError(validation.error, 400));
    }

    next();
};

/**
 * Middleware to validate update user request
 */
export const validateUpdateUser = (req, res, next) => {
    const validation = validateUpdatePayload(req.body);

    if (!validation.isValid) {
        return next(new AppError(validation.error, 400));
    }

    next();
};

/**
 * Middleware to validate ObjectId parameter
 */
export const validateObjectId = (paramName = 'id') => {
    return (req, res, next) => {
        const id = req.params[paramName];

        if (!isValidObjectId(id)) {
            return next(new AppError(`Invalid ${paramName} format`, 400));
        }

        next();
    };
};
