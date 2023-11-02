const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '254105435036'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb://usrdhz7ejxwayzvw69qm:fRuJImqP1BOZyGk9fD6@bupt7kruqljyivftjl4i-mongodb.services.clever-cloud.com:2791/bupt7kruqljyivftjl4i"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/Bladeh4x/BLADE-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "2348059540212"
global.devs = '2348059540212';
global.website = 'https://github.com/Bladeh4x/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "BLADE-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxROW5GUGxSMGhaMDBuTGsyK3l3akpiK3NwcUVEeTBXV3M1cVM2MHczdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickJvSFBvM052RlI3aU44ZHhSdkFjZ2lUTXBoYXNlaGhVWmNWeG1FR3hXcz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQzArZEpBa3A0QzVwK2VTU0VZVWpQSjdLOGgrZFNkME1YeEk1aUcxWUhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpbmZsb0JUVUM5NHFseksrb0U0NUVFQWFwaUpzU24yeTd4YUE5RXYwOVVzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVDcS9vY2hwV2N3cXhYVHE5aVY0eWltUXppL3NjdGtONld4T0NVZGU2WG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNIRGUxMEhvN1JFMEpLZG1nQkplbFQyU25JOGtqTTBtU2F6UGhqOWh4ZzQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQithVnduclZoSHBkbTRJZDJLLzczSFlaUDBxaEhGUE9weUxmQkZiTXZqV1FTdXF2dlBQcmp2Q1I2RlViYkVidHlwSUZtblB2TTZQRzlaaHJCWjhDdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjg3LCJhZHZTZWNyZXRLZXkiOiJCanNxVmZBT0pQQW8yYkoxOGU2Y0lzT1JRTCtBbzlJaXE5eWI2ZlZUdUZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRcnpmUGEzclFNdXJ2ektYNVdqVmpRIiwicGhvbmVJZCI6ImM4NmZkNWIwLTYwMTMtNDNiNS1iYTVjLTEyZTI5OThjNWQ3ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZWS9IVmNDT2tvQmd2UGJ3RkN1SmV6eUxSUGc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpWMWRnVDRPVHpEMkpLSEVGMHVTSFl3aDVOUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tiKys2RUdFUEQvanFvR0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVXBvUFNIQ0swSG1MbDNxREFBbllzNjF1TnoyUDZyQWV3ZDg5TXdqeEExbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM3VYMm1KSW9SU0dYR0dkV1RkeDYvbG9hRTlYM04vVnhRdTZ1ajA5bGFFOWw3VmJJTlVsVk9YN3daWFkwL2dDLytvcG1mQkp1L2hiakJwdUlaaFRZQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IkRiNGI0eVdtSTlSOFpoQUlER2lrblc2ajJvd2VPOEdHbkZob2owRFowQk0zR3h6SG9abFZuSG41MkZCenJKU0lyam5KZEFxVTZqKzJSZ1Fub01STkFnPT0ifSwibWUiOnsiaWQiOiIyNTQxMDU0MzUwMzY6NDNAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTA1NDM1MDM2OjQzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZLYUQwaHdpdEI1aTVkNmd3QUoyTE90YmpjOWorcXdIc0hmUFRNSThRTmEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTg5Mzg4Njh9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BLADE BOT',
  packname:  process.env.PACK_NAME || 'MADE BY ALEX DAVID',
  
  botname:   process.env.BOT_NAME === undefined ? "Jayrillo" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'jayrillo' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuck' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'delete' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'true' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴅᴇ-²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
