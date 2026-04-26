import { validateUserRequired, validateUpdatePayload, isValidObjectId } from '../utils/validators.js';

describe('Validators', () => {
    describe('validateUserRequired', () => {
        test('should pass valid user data', () => {
            const user = { name: 'John', surname: 'Doe', age: 30 };
            const result = validateUserRequired(user);
            expect(result.isValid).toBe(true);
            expect(result.error).toBeNull();
        });

        test('should fail when name is missing', () => {
            const user = { surname: 'Doe', age: 30 };
            const result = validateUserRequired(user);
            expect(result.isValid).toBe(false);
            expect(result.error).toContain('Missing required fields');
        });

        test('should fail when surname is missing', () => {
            const user = { name: 'John', age: 30 };
            const result = validateUserRequired(user);
            expect(result.isValid).toBe(false);
            expect(result.error).toContain('Missing required fields');
        });

        test('should fail when age is missing', () => {
            const user = { name: 'John', surname: 'Doe' };
            const result = validateUserRequired(user);
            expect(result.isValid).toBe(false);
            expect(result.error).toContain('Missing required fields');
        });

        test('should fail when name is not a string', () => {
            const user = { name: 123, surname: 'Doe', age: 30 };
            const result = validateUserRequired(user);
            expect(result.isValid).toBe(false);
            expect(result.error).toContain('must be strings');
        });

        test('should fail when age is not an integer', () => {
            const user = { name: 'John', surname: 'Doe', age: 30.5 };
            const result = validateUserRequired(user);
            expect(result.isValid).toBe(false);
            expect(result.error).toContain('must be an integer');
        });

        test('should fail when name is empty', () => {
            const user = { name: '   ', surname: 'Doe', age: 30 };
            const result = validateUserRequired(user);
            expect(result.isValid).toBe(false);
            expect(result.error).toContain('cannot be empty');
        });

        test('should fail when age is negative', () => {
            const user = { name: 'John', surname: 'Doe', age: -5 };
            const result = validateUserRequired(user);
            expect(result.isValid).toBe(false);
            expect(result.error).toContain('between 0 and 150');
        });

        test('should fail when age is over 150', () => {
            const user = { name: 'John', surname: 'Doe', age: 200 };
            const result = validateUserRequired(user);
            expect(result.isValid).toBe(false);
            expect(result.error).toContain('between 0 and 150');
        });

        test('should fail when body is not an object', () => {
            const result = validateUserRequired('not an object');
            expect(result.isValid).toBe(false);
            expect(result.error).toContain('must be a valid JSON object');
        });
    });

    describe('validateUpdatePayload', () => {
        test('should pass valid update with one field', () => {
            const updates = { name: 'Jane' };
            const result = validateUpdatePayload(updates);
            expect(result.isValid).toBe(true);
            expect(result.error).toBeNull();
        });

        test('should pass valid update with multiple fields', () => {
            const updates = { name: 'Jane', age: 31 };
            const result = validateUpdatePayload(updates);
            expect(result.isValid).toBe(true);
            expect(result.error).toBeNull();
        });

        test('should fail when no fields provided', () => {
            const updates = {};
            const result = validateUpdatePayload(updates);
            expect(result.isValid).toBe(false);
            expect(result.error).toContain('At least one field');
        });

        test('should fail when name is empty string', () => {
            const updates = { name: '  ' };
            const result = validateUpdatePayload(updates);
            expect(result.isValid).toBe(false);
            expect(result.error).toContain('cannot be empty');
        });

        test('should fail when age is invalid', () => {
            const updates = { age: 200 };
            const result = validateUpdatePayload(updates);
            expect(result.isValid).toBe(false);
            expect(result.error).toContain('between 0 and 150');
        });

        test('should allow partial updates', () => {
            const updates = { age: 35 };
            const result = validateUpdatePayload(updates);
            expect(result.isValid).toBe(true);
            expect(result.error).toBeNull();
        });
    });

    describe('isValidObjectId', () => {
        test('should accept valid MongoDB ObjectId', () => {
            const validId = '507f1f77bcf86cd799439011';
            const result = isValidObjectId(validId);
            expect(result).toBe(true);
        });

        test('should reject invalid ObjectId', () => {
            const invalidId = 'not-a-valid-id';
            const result = isValidObjectId(invalidId);
            expect(result).toBe(false);
        });

        test('should reject short string', () => {
            const invalidId = '123';
            const result = isValidObjectId(invalidId);
            expect(result).toBe(false);
        });

        test('should reject null', () => {
            const result = isValidObjectId(null);
            expect(result).toBe(false);
        });

        test('should reject undefined', () => {
            const result = isValidObjectId(undefined);
            expect(result).toBe(false);
        });
    });
});
