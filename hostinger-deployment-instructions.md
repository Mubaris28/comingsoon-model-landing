# Hostinger Deployment Instructions

## 1. Build and Export the Next.js Site

Run these commands locally:

```
npm run build
```

## 2. Upload Files to Hostinger

Upload the contents of the 'out' directory to your Hostinger public_html folder.

## 3. Create .htaccess File

Create a .htaccess file in your public_html folder with the following content:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Set proper MIME types for JavaScript and CSS
<IfModule mod_mime.c>
  AddType text/javascript .js
  AddType text/css .css
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/javascript text/javascript
</IfModule>

# Set proper caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>
```

## 4. File Permissions

Set proper permissions:

- Directories: 755
- Files: 644

Example command (if you have SSH access):

```
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
```

## 5. Test the Site

Access your site through your domain to verify everything works correctly.

## Troubleshooting 403 Forbidden Errors

If you still encounter 403 errors:

1. **Check Hostinger File Manager Permissions**

   - Log into your Hostinger Control Panel
   - Go to File Manager
   - Right-click on the folders and select "Change Permissions"
   - Set directories to 755 and files to 644

2. **Contact Hostinger Support**

   - If you still have issues, contact Hostinger support with the specific error details
   - They can check server configurations that may be causing the problem

3. **Verify .htaccess is Being Read**
   - Create a test .htaccess rule to confirm the file is being processed
   - Make a backup of your original .htaccess first
