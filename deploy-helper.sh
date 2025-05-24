#!/bin/bash

# Portfolio Deployment Script for Lisoing Sem
# This script helps deploy your enhanced portfolio to your live website

echo "🚀 Portfolio Deployment Helper"
echo "================================="

# Check if git is available
if command -v git &> /dev/null; then
    echo "✅ Git is available"
    
    # Check if this is a git repository
    if [ -d ".git" ]; then
        echo "📂 Current directory is a git repository"
        
        # Show current status
        echo "📊 Current git status:"
        git status --short
        
        echo ""
        echo "🔄 To deploy your changes:"
        echo "1. git add ."
        echo "2. git commit -m 'Enhanced portfolio with modern UI and updated projects'"
        echo "3. git push origin main"
        
    else
        echo "📂 Not a git repository. To initialize:"
        echo "1. git init"
        echo "2. git add ."
        echo "3. git commit -m 'Initial commit - Enhanced portfolio'"
        echo "4. git remote add origin <your-repository-url>"
        echo "5. git push -u origin main"
    fi
else
    echo "❌ Git not found. Please install git first."
fi

echo ""
echo "📝 Enhanced Features Added:"
echo "- ✨ Modern Laravel + Vue3 + Tailwind CSS focus"
echo "- 🎨 Technology stack showcase with icons"
echo "- 📊 Project highlights with 4 major platforms"
echo "- 🎯 Tech focus areas with visual enhancements"
echo "- 📱 Improved responsive design"
echo "- 🚀 Enhanced hero section with stats"
echo ""
echo "🌐 Your portfolio showcases:"
echo "- CATA (Cambodia Tourism) - Laravel + Tailwind + Snctm API"
echo "- Sunsimexco - Laravel + Vue3 + Inertia.js + nWidart"
echo "- 3WinBiz - Scalable back-office platform"
echo "- HEMIS - Higher education management system"
echo ""
echo "📧 Contact: lisoing2018@gmail.com"
echo "🔗 GitHub: https://github.com/LisoingSem"
echo ""
echo "Happy coding! 🎉"
