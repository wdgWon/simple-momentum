const firstDis = document.querySelector('.calculator_head ul li:first-child');
const secondDis = document.querySelector('.calculator_head ul li:last-child');
const keypad = document.querySelectorAll('.calculator_keypad');
const num = document.querySelectorAll('.number');
const oper = document.querySelectorAll('.operator');
const AC = document.querySelector('[value="AC"]');
const CE = document.querySelector('[value="CE"]');
const res = document.querySelector('[value="="]');
const DOT = '.';
let operArr = new Array();
// let resultMemory = new String();
// let calMemory = new String();
// let opMemory = false;

let cal_obj = {
    resultMemory : '',
    calMemory : '',
    opMemory : true,
    
    //문자 push, 연산자/점 true
    pushAndCheckOper(value, isOper) {
        this.calMemory += value;
        this.opMemory = isOper;
    },
    
    // 마지막 문자 삭제
    popCalMemory() {
        this.calMemory = this.calMemory.substring(0, cal_obj.calMemory.length - 1);
    },
    
    // 이전 계산 결과 제외한 초기화 함수
    resetCalBuffer() {
        this.calMemory = '';
        this.opMemory = true;
    },
    
    // 화면 출력
    setDisplay(value) {
        firstDis.innerText = this.resultMemory;
        secondDis.innerText = value === undefined ? cal_obj.calMemory : value;
    },

    // 이어서 계산 
    continueCalculate() {
        if((this.calMemory.length === 1)&&(this.resultMemory.length !== 0)) {
            this.calMemory = this.resultMemory + this.calMemory;
            this.setDisplay();
            return;
        }
        this.setDisplay();
    },

    isContainDot() {
        if(this.calMemory.length !== 0) {
            return this.calMemory.indexOf(DOT) >= 0 ? true : false;
        }
        return this.resultMemory.indexOf(DOT) >= 0 ? true : false;
    }

}

// 숫자
num.forEach(element => {
    element.addEventListener("click", event => {
        const tmpNum = event.target.value;
        cal_obj.pushAndCheckOper(tmpNum, false);
        cal_obj.setDisplay();
    })
});

// 연산자, 기호
oper.forEach(element => {

    // 연산자, 기호 값을 배열에 저장
    operArr.push(element.value);

    element.addEventListener("click", event => {
        const tmpOper = event.target.value;
        
        if((tmpOper === DOT)&&cal_obj.isContainDot()) {
            return;
        }
        // 정상적인 경우 계속 실행
        if(!cal_obj.opMemory&&(cal_obj.length !== 0)) {
            cal_obj.pushAndCheckOper(tmpOper, true);
            cal_obj.continueCalculate();
            return;
        }
        // 연산자,기호 중복 방지
        if(cal_obj.opMemory&&(cal_obj.length !== 0)) {
            cal_obj.popCalMemory();
            return;
        }
        // 첫 입력이 연산자나 점이면 아무일 안함
        return;
    });
});

// 전체 클리어
AC.addEventListener("click", () => {
    cal_obj.resultMemory = '';
    cal_obj.resetCalBuffer();
    cal_obj.setDisplay('');
});

// 백스페이스
CE.addEventListener("click", () => {
    cal_obj.popCalMemory();

    // 연산자 앞까지만 지웠을 경우 연산자 재입력 방지
    if(operArr.filter(element => cal_obj.calMemory.endsWith(element)).length !== 0) {
        cal_obj.opMemory = true;
    } else {
        cal_obj.opMemory = cal_obj.calMemory === '' ? true : false;
    }
    cal_obj.setDisplay();
});

// 계산 후 초기화 및 저장
res.addEventListener("click", () => {
    
    // 연산자, 기호 다음 바로 = 입력 시 에러 방지
    if(cal_obj.opMemory){
        cal_obj.popCalMemory();
    }
    
    // 계산값을 setDisplay로 먼저 출력한 후 resultMemory에 현재값 저장
    const result = eval(cal_obj.calMemory).toString();
    cal_obj.setDisplay(result);
    cal_obj.resultMemory = result;
    
    // 초기화
    cal_obj.resetCalBuffer();
});















// function getKeyValue(event) {
//     const isOperator = event.target.className;
//     const keyValue = event.target.value;

//     if(isOperator.endsWith(CAL_OPERATOR)) {
//         calculateOperator(keyValue);
//     }
//     else {
//         calMemory += keyValue;
//         opMemory = false;
//         console.log(calMemory);
//     }
//     setDisplay(calMemory);
// }

// function calculateOperator(keyValue) {
//     if(opMemory) {
//         calMemory = calMemory.substring(0,calMemory.length-1);
//     } else if(keyValue === '=') {
//         calculateResult();
//     }
//     opMemory = true;
//     calMemory += keyValue;
// }

// function calculateResult() {
//     const result = eval(calMemory);
//     resultMemory = result;
//     setDisplay(result);
//         // 초기화
//     calMemory = '';
//     opMemory = false;
// }

// function setDisplay(value) {
//     calDisplay.innerText = value;
// }