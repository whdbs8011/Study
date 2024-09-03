const days = prompt("");
if(days == null) alert("XXX");
else{
    switch(days){
        case '월':
            case '화':
                case '수':
                    case '목':
                        document.write(days + "(은)는 출근");
    break;
    case '금':
        case '토':
            case '일':
                document.write(days + "는 휴일");
    break;
        
    }
}