var num = parseFloat(prompt("请输入您的成绩"));
//    方法1：if判断语句
/*
 if (0 < num && num <= 10) {
 console.log('10等生');
 } else if (10 < num && num <= 20) {
 console.log('9等生');
 } else if (20 < num && num <= 30) {
 console.log('8等生');
 } else if (30 < num && num <= 40) {
 console.log('7等生');
 } else if (40 < num && num <= 50) {
 console.log('6等生');
 } else if (50 < num && num <= 60) {
 console.log('5等生');
 } else if (60 < num && num <= 70) {
 console.log('4等生');
 } else if (70 < num && num <= 80) {
 console.log('3等生');
 } else if (80 < num && num <= 90) {
 console.log('2等生');
 } else if (90 < num && num <= 100) {
 console.log('1等生');
 } else {
 console.log('请输入正确的分数');
 }
 */

//    方法2：switch...case
var score = Math.round(num/10);
switch (score){
    case 0:
        console.log('10等生');
        break;
    case 1:
        console.log('9等生');
        break;
    case 2:
        console.log('8等生');
        break;
    case 3:
        console.log('7等生');
        break;
    case 4:
        console.log('6等生');
        break;
    case 5:
        console.log('5等生');
        break;
    case 6:
        console.log('4等生');
        break;
    case 7:
        console.log('3等生');
        break;
    case 8:
        console.log('2等生');
        break;
    case 9:
    case 10:
        console.log('1等生');
        break;
    default:
        console.log('请输入正确的分数~~~');
        break;
}
