# Contributing to REST API Node.js

First off, thanks for taking the time to contribute! 🎉

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and expected behavior**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the JavaScript styleguide
* End all files with a newline
* Add tests for any new functionality
* Ensure all tests pass before submitting

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * 🐛 `:bug:` when fixing a bug
    * ✨ `:sparkles:` when introducing new features
    * 📝 `:memo:` when writing docs
    * 🧪 `:test_tube:` when adding tests
    * ♻️ `:recycle:` when refactoring code
    * 🔧 `:wrench:` when updating configuration files
    * 🚀 `:rocket:` when improving performance
    * ✅ `:white_check_mark:` when fixing tests

### JavaScript Styleguide

All JavaScript must adhere to [ESLint](/.eslintrc.json) and [Prettier](/.prettierrc) configurations.

* Prefer `const` over `let`
* Use arrow functions `() => {}`
* Use template literals for string interpolation
* Use async/await over promises
* Add JSDoc comments to functions

### Documentation Styleguide

* Use Markdown
* Reference other sections with markdown links
* Use code blocks for examples
* Use clear and descriptive headings

## Development Workflow

1. **Fork and clone the repository**
```bash
git clone https://github.com/YOUR-USERNAME/REST_API_nodejs.git
cd REST_API_nodejs
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a feature branch**
```bash
git checkout -b feature/your-feature-name
```

4. **Make your changes and commit**
```bash
git add .
git commit -m "feat: add your feature description"
```

5. **Run tests and linting**
```bash
npm test
npm run lint
npm run format
```

6. **Push to your fork**
```bash
git push origin feature/your-feature-name
```

7. **Create a Pull Request**
* Provide a clear title and description
* Reference any related issues
* Wait for review and feedback

## Testing

* Write tests for all new functionality
* Ensure all tests pass: `npm test`
* Maintain or improve code coverage
* Use descriptive test names

## Additional Notes

### Issue and Pull Request Labels

* `bug` - Something isn't working
* `enhancement` - New feature or request
* `documentation` - Improvements or additions to documentation
* `help wanted` - Need assistance
* `good first issue` - Good for newcomers
* `in progress` - Currently being worked on
* `question` - Further information is requested

## Questions?

Feel free to [open an issue](https://github.com/skalashynski/REST_API_nodejs/issues) with the label `question`.

---

**Happy Contributing!** 🚀
