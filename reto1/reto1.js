import fetch from 'node-fetch'

const response = await fetch('https://codember.dev/users.txt');
const usersText = await response.text();

const users = usersText.split('\n\n');
const VALID_FIELDS = ['usr','eme','loc','psw','age','fll']

const validUsers = users.filter(line => (VALID_FIELDS.every(field => line.includes(`${field}:`))))

const lastUser = validUsers[validUsers.length-1]
const username = lastUser.substring(lastUser.indexOf('@'), lastUser.indexOf(' ', lastUser.indexOf('@')))
console.log(`${validUsers.length}${username}`);
