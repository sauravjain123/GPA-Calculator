// onclick Event function call to get all input value.let numSem = document.querySelector('num-sem').value;
// let num_sem;
let first_gpa = 0;
let two_gpa = 0;
let three_gpa = 0;
let four_gpa = 0;
let five_gpa = 0;
let six_gpa = 0;
let seven_gpa = 0;
let eight_gpa = 0;
document.querySelector('#btn_sub').addEventListener('click', () => {

   
    // first_gpa = parseInt(document.querySelector("#first-gpa").value);
    // two_gpa = parseInt(document.querySelector("#two-gpa").value);
    // three_gpa = parseInt(document.querySelector("#three-gpa").value);
    // four_gpa = parseInt(document.querySelector("#four-gpa").value);
    // five_gpa = parseInt(document.querySelector("#five-gpa").value);
    // six_gpa = parseInt(document.querySelector("#six-gpa").value);
    // seven_gpa = parseInt(document.querySelector("#seven-gpa").value);
    // eight_gpa = parseInt(document.querySelector("#eight-gpa").value);
    // total = first_gpa + two_gpa + three_gpa + four_gpa + five_gpa + six_gpa + seven_gpa + eight_gpa;
    // total_cgpa = (total / num_sem);


    // total value show output
    let num_sem = (document.getElementById("num-sem").value);
    switch (num_sem) {
        case "1":
            first_gpa = parseInt(document.querySelector("#first-gpa").value);
            two_gpa = 0;
            three_gpa = 0;
            four_gpa = 0;
            five_gpa = 0;
            six_gpa =0;
            seven_gpa = 0;
            eight_gpa = 0;
            total = first_gpa + two_gpa + three_gpa + four_gpa + five_gpa + six_gpa + seven_gpa + eight_gpa;
            total_cgpa = (total / num_sem);
            document.querySelector('.cgpa_output h1').innerHTML = `TOTAL CGPA = ${total_cgpa}`
            break;
        case "2":
         
            first_gpa = parseInt(document.querySelector("#first-gpa").value);
            two_gpa = parseInt(document.querySelector("#two-gpa").value);
            three_gpa = 0;
            four_gpa =0;
            five_gpa =0;
            six_gpa =0
            seven_gpa = 0;
            eight_gpa = 0;
            total = first_gpa*20 + two_gpa*20 + three_gpa + four_gpa + five_gpa + six_gpa + seven_gpa + eight_gpa;
            total_cgpa = (total / 40);
            document.querySelector('.cgpa_output h1').innerHTML = `TOTAL CGPA = ${total_cgpa}`
            break;

        case "3":
            first_gpa = parseInt(document.querySelector("#first-gpa").value);
            two_gpa = parseInt(document.querySelector("#two-gpa").value);
            three_gpa = parseInt(document.querySelector("#three-gpa").value);
            four_gpa = 0;
            five_gpa = 0;
            six_gpa =0;
            seven_gpa = 0;
            eight_gpa = 0;
            total = first_gpa*20 + two_gpa*20 + three_gpa*25 + four_gpa + five_gpa + six_gpa + seven_gpa + eight_gpa;
            total_cgpa = (total / 65).toPrecision(3);
            document.querySelector('.cgpa_output h1').innerHTML = `TOTAL CGPA = ${total_cgpa}`
            break;
        
            case "4":
            first_gpa = parseInt(document.querySelector("#first-gpa").value);
            two_gpa = parseInt(document.querySelector("#two-gpa").value);
            three_gpa = parseInt(document.querySelector("#three-gpa").value);
            four_gpa = parseInt(document.querySelector("#four-gpa").value);
            five_gpa = 0;
            six_gpa = 0;
            seven_gpa = 0;
            eight_gpa = 0;
            total = first_gpa*20 + two_gpa*20 + three_gpa*25 + four_gpa*25 + five_gpa + six_gpa + seven_gpa + eight_gpa;
            total_cgpa = (total / 90).toPrecision(3);
            document.querySelector('.cgpa_output h1').innerHTML = `TOTAL CGPA = ${total_cgpa}`
            break
            case "5":
            first_gpa = parseInt(document.querySelector("#first-gpa").value);
            two_gpa = parseInt(document.querySelector("#two-gpa").value);
            three_gpa = parseInt(document.querySelector("#three-gpa").value);
            four_gpa = parseInt(document.querySelector("#four-gpa").value);
            five_gpa = parseInt(document.querySelector("#five-gpa").value);
            six_gpa = 0;
            seven_gpa = 0;
            eight_gpa = 0;
            total = (first_gpa*20) + (two_gpa*20) + (three_gpa*25) + (four_gpa*25) + (five_gpa*25) ;
            total_cgpa = (total / 115).toPrecision(3);
            document.querySelector('.cgpa_output h1').innerHTML = `TOTAL CGPA = ${total_cgpa}`
            break
            case "6":
            first_gpa = parseInt(document.querySelector("#first-gpa").value);
            two_gpa = parseInt(document.querySelector("#two-gpa").value);
            three_gpa = parseInt(document.querySelector("#three-gpa").value);
            four_gpa = parseInt(document.querySelector("#four-gpa").value);
            five_gpa = parseInt(document.querySelector("#five-gpa").value);
            six_gpa = parseInt(document.querySelector("#six-gpa").value);
            seven_gpa = 0;
            eight_gpa = 0;
            total = first_gpa*20 + two_gpa*20 + three_gpa*25 + four_gpa*25 + five_gpa*25 + six_gpa*25 + seven_gpa + eight_gpa;
            total_cgpa = (total / 140).toPrecision(3);
            document.querySelector('.cgpa_output h1').innerHTML = `TOTAL CGPA = ${total_cgpa}`
            break
            case "7":
            first_gpa = parseInt(document.querySelector("#first-gpa").value);
            two_gpa = parseInt(document.querySelector("#two-gpa").value);
            three_gpa = parseInt(document.querySelector("#three-gpa").value);
            four_gpa = parseInt(document.querySelector("#four-gpa").value);
            five_gpa = parseInt(document.querySelector("#five-gpa").value);
            six_gpa = parseInt(document.querySelector("#six-gpa").value);
            seven_gpa = parseInt(document.querySelector("#seven-gpa").value);
            eight_gpa = 0;
            total = first_gpa*20 + two_gpa*20 + three_gpa*25 + four_gpa*25 + five_gpa*25 + six_gpa*25 + seven_gpa*19 + eight_gpa;
            total_cgpa = (total / 159).toPrecision(3);
            document.querySelector('.cgpa_output h1').innerHTML = `TOTAL CGPA = ${total_cgpa}`
            break
            case "8":
            first_gpa = parseInt(document.querySelector("#first-gpa").value);
            two_gpa = parseInt(document.querySelector("#two-gpa").value);
            three_gpa = parseInt(document.querySelector("#three-gpa").value);
            four_gpa = parseInt(document.querySelector("#four-gpa").value);
            five_gpa = parseInt(document.querySelector("#five-gpa").value);
            six_gpa = parseInt(document.querySelector("#six-gpa").value);
            seven_gpa = parseInt(document.querySelector("#seven-gpa").value);
            eight_gpa = parseInt(document.querySelector("#eight-gpa").value);
            total = first_gpa*20 + two_gpa*20 + three_gpa*25 + four_gpa*25 + five_gpa*25 + six_gpa*25 + seven_gpa*19 + eight_gpa*16;
            total_cgpa = (total / 175).toPrecision(3);
            document.querySelector('.cgpa_output h1').innerHTML = `TOTAL CGPA = ${total_cgpa}`
            break
            default:
                document.querySelector('.cgpa_output h1').innerHTML = "Sorry !! There is some error .."
        
    }
})


document.querySelector('#btn_re').addEventListener('click', () => {
    document.querySelector('.cgpa_output h1').innerHTML = `TOTAL CGPA =`
    document.querySelector('#first-gpa').value = '';
    document.querySelector('#two-gpa').value = '';
    document.querySelector('#three-gpa').value = '';
    document.querySelector('#four-gpa').value = '';
    document.querySelector('#five-gpa').value = '';
    document.querySelector('#six-gpa').value = '';
    document.querySelector('#seven-gpa').value = '';
    document.querySelector('#eight-gpa').value = '';
})
