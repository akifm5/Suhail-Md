const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="mathara,colombo,srilanka"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv:DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/CX9uepAQs55CNsFiHvTXUH";
global.website=process.env.GURL || "https://chat.whatsapp.com/CX9uepAQs55CNsFiHvTXUH" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923198711323" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,923198711323";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923198711323";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923198711323";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_34_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTksXG4gICAgICAgIDM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODksXG4gICAgICAgIDUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDgwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNzksXG4gICAgICAgIDE3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDkyLFxuICAgICAgICA4MixcbiAgICAgICAgMTEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYyLFxuICAgICAgICA0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDg1LFxuICAgICAgICA2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUzLFxuICAgICAgICA1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInl2eGJ1N1llTzcwdnB5MkpXaHcyU1RrTDBGa1dycGlTRUVZSElkelMzRmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTk4NzExMzIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMjcwMzE4OEJGN0VEQzY2RUEzNjg5NDAxRkMyQkJBQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTUxMTQwNDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxOTg3MTEzMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJEQjJFMEJFRkI4OENGMUE3QUQzNzFEMjFCNjk5MkIwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTExNDA0N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfcEZOMEYtdFFaQ3k3bzdadnZRVG5nXCIsXG4gIFwicGhvbmVJZFwiOiBcImY3Y2NhNmFkLWUzMGQtNDJkNy1hOTEwLTEzYjZlOTE5NWE2YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgMTU5LFxuICAgICAgMTgwLFxuICAgICAgODUsXG4gICAgICAyNDcsXG4gICAgICA2LFxuICAgICAgNzgsXG4gICAgICA5OSxcbiAgICAgIDE2NixcbiAgICAgIDI1MyxcbiAgICAgIDIxNCxcbiAgICAgIDU1LFxuICAgICAgMTU4LFxuICAgICAgMSxcbiAgICAgIDEzMixcbiAgICAgIDE1NixcbiAgICAgIDEyMixcbiAgICAgIDEzOSxcbiAgICAgIDE5NixcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDM3LFxuICAgICAgMTY0LFxuICAgICAgMTYxLFxuICAgICAgODcsXG4gICAgICAxMDMsXG4gICAgICAyMzksXG4gICAgICAzNyxcbiAgICAgIDE5NyxcbiAgICAgIDE4NCxcbiAgICAgIDEwLFxuICAgICAgMTA2LFxuICAgICAgMTE5LFxuICAgICAgMTgsXG4gICAgICAyMzgsXG4gICAgICA2NCxcbiAgICAgIDQ5LFxuICAgICAgMTMxLFxuICAgICAgMTg3LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJLV0FNV1NKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTg3MTEzMjM6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NTYzMjU5NDcyNjk5NDoyMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBbGlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcm16NDhFRUxhZzZyRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZ2dTNjTzNhd01Pak90ODhDWEIwRnVVWk04V2NDVmFmZTAxZUJLMHphZ0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTHJhNDF1Njc0VFc3KzBHQ0lNdW4yYndWZndLNHpxR3c4U1EyU3VCMVZ1UWxrVTdTRUc0NVcvbW14dGxlT3NiaWJDZzg0WXZMNW1qSzBzcGFMUnhlQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiazdyVjRSczQyNEh6RW5wbjRGaU1oS0czUWV0dCtwUklkL1Y5OXN1QkYvQWxnQkV2SnlHaU5ZdXdBQ1NhUFBRZWg1SUNDcHVWT012cWl2QktLbHhsRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTk4NzExMzIzOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTExNDA0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhRTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFFMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiejMzSG1HQzZlK09SNExMWjVpVVdBZTZCeHF6QXFNYVJYSzZlMXJOTUZiQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTA2NTA2NjAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTUxMTQwNDM0MDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "alihaider6",
  packname: process.env.PACK_NAME || "alihaider6",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "alihaider6",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
