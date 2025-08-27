# Node 20 reicht für das Projekt
FROM node:20-alpine

WORKDIR /app

# Nur package-Dateien zuerst kopieren, damit Docker-Layer cacht
COPY package*.json ./

# 👉 @modelcontextprotocol/sdk auf eine existierende Version setzen
# Falls ein Lockfile vorhanden ist, entfernen wir es, damit npm die geänderte Version berücksichtigt
RUN node -e "const fs=require('fs');const p=JSON.parse(fs.readFileSync('package.json','utf8')); \
if(p.dependencies && p.dependencies['@modelcontextprotocol/sdk']){p.dependencies['@modelcontextprotocol/sdk']='^0.2.0';} \
fs.writeFileSync('package.json',JSON.stringify(p,null,2));" \
 && rm -f package-lock.json \
 && npm install --omit=dev

# Rest des Codes
COPY . .

# ggf. Port anpassen
EXPOSE 3000

# Start des Servers – falls dein Repo ein start-script hat, passt das
CMD ["npm", "start"]
