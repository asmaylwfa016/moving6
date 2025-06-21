#!/bin/bash

# Netlify build script for SvelteKit with static images

echo "🚀 Starting build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production=false

# Build the SvelteKit app
echo "🔨 Building SvelteKit app..."
npm run build

# Verify images are in build folder
echo "🖼️ Verifying images..."
if [ -d "build/images" ]; then
    echo "✅ Images folder found in build directory"
    echo "📊 Image count: $(find build/images -name "*.jpg" | wc -l) JPG files"
    echo "📊 Image count: $(find build/images -name "*.png" | wc -l) PNG files"
else
    echo "❌ Images folder NOT found in build directory"
    exit 1
fi

# List some sample images
echo "🔍 Sample images in build/images:"
ls -la build/images/ | head -10

echo "✅ Build completed successfully!" 