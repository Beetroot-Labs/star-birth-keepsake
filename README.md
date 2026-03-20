# Star Birth Keepsake

This site is prepared for deployment to GitHub Pages through GitHub Actions.

## Deploying to GitHub Pages

1. Push changes to the `main` branch.
2. In GitHub, open `Settings` -> `Pages`.
3. Set the source to **GitHub Actions**.
4. The workflow at `.github/workflows/deploy-pages.yml` will build and deploy the site automatically.

## Notes

- Production builds automatically use the repository name as the Vite `base` path for project Pages URLs.
- Repositories named `<owner>.github.io` deploy from the root path `/`.
- If you later use a custom domain, add a repository variable named `BASE_PATH` with the value `/` so the deployed asset URLs stay rooted correctly.
- The Pages build also creates `dist/404.html` from `dist/index.html` so client-side routes continue to work on GitHub Pages.
