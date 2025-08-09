git add .
git commit -m "Clean rebuild"
git push origin main

# build production files
npm run build

# publish dist to remote gh-pages (recreate the branch)
npx gh-pages -d dist -b gh-pages -r https://github.com/MI010/portfolio-frontend.git -m "Deploy"
Then in GitHub → Settings → Pages:

Source: Deploy from a branch

Branch: gh-pages and / (root)