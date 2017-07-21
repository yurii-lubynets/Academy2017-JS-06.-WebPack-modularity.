import '../css/style.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import fb from '../../fb.jpg';

let file = require('./file');
let userList = require('./userList.js');
const users = [
    {avatar: fb, name: 'A', age: 1},
    {avatar: fb, name: 'B', age: 2},
    {avatar: fb, name: 'C', age: 3},
    {avatar: fb, name: 'D', age: 4},
    {avatar: fb, name: 'E', age: 5},
    {avatar: fb, name: 'F', age: 6},
    {avatar: fb, name: 'G', age: 7},
    {avatar: fb, name: 'H', age: 8},
    {avatar: fb, name: 'I', age: 9}
];
file();
let userListModule = new userList(users);
userListModule.showList();