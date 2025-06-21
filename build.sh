#!/bin/bash

echo "Starting build process..."

# Check Node version
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Clean any existing build
rm -rf build
rm -rf .svelte-kit

# Install dependencies
echo "Installing dependencies..."
npm install --production=false

# Verify vite is available
echo "Checking vite..."
npx vite --version

# Run build
echo "Running build..."
npm run build

echo "Build completed!"

# Check if build directory exists
if [ -d "build" ]; then
    echo "Build directory created successfully"
    ls -la build/
else
    echo "ERROR: Build directory not found!"
    exit 1
fi 