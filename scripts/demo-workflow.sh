#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🎨 Token Studio → Implementation Demo${NC}\n"

# Store any unstaged changes
echo -e "${GREEN}1. Preparing workspace...${NC}"
git stash -u

echo -e "\n${YELLOW}📥 Token Studio update from Figma detected...${NC}"
echo -e "${BLUE}→ Changes have been pushed as a Pull Request${NC}"

echo -e "\n${YELLOW}⚠️  Action Required: Please merge the Pull Request in GitHub${NC}"
echo -e "${BLUE}→ Press Enter after you've merged the PR to continue...${NC}"
read

echo -e "\n${GREEN}2. Pulling Token Studio updates...${NC}"
git checkout main
git pull

echo -e "\n${GREEN}3. Building design tokens...${NC}"
npm run build:tokens > /dev/null 2>&1
echo -e "${BLUE}→ Tokens successfully built from Token Studio JSON${NC}"

echo -e "\n${GREEN}4. Starting development server...${NC}"
echo -e "${BLUE}→ View the updated design system at http://localhost:5175${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop the demo${NC}\n"

# Restore any stashed changes after the demo
trap 'git stash pop > /dev/null 2>&1' EXIT

npm run dev
