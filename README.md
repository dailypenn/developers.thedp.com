<p align="left">
  <a href="https://developers.thedp.com/">
    <img alt="DP Tech" src="./static/logo-rect.png" width="250" />
  </a>
</p>

## 🚀 Quick start

```
npm install (you only need to run this when packages change)
gatsby develop
```
## 🔨 For some Mac M1 Users:
There may be a bug related to the package `sharp` during installation which require you to install `libvips` along with other configurations for path variables. If you do encounter this errors, please:

```
brew install vips pkg-config glib zlib  
export LDFLAGS="-L/opt/homebrew/opt/zlib/lib"  
export CPPFLAGS="-I/opt/homebrew/opt/zlib/include"
export PKG_CONFIG_PATH="/opt/homebrew/opt/zlib/lib/pkgconfig"
export NODE_OPTIONS=--openssl-legacy-provide
```

Everything should be good to go after this and run `npm install` again.


The website should be running @ `localhost:8000` 
- Note: the website automatically reloads when changes are made, so you do not need to restart the server

## ✏️ Update personal information

Go to `src/json/team.json`, and look for the object with your name
