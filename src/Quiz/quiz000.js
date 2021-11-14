console.log("hello world!")

function ひろみが好きな人を叫ぶ(好きな人) {
    return "ひろみが好きなのは・・・" + 好きな人 + "！！"
}

function 明日の朝ごはんは(ご飯) {
    return "朝ご飯は" + ご飯
}

function ガソリン満タンの金額(オイルの値段) {
    return オイルの値段 * 25
}

function sayHello(){
    return "hello world"
}

function Quiz0() {
    return (
        <>
            <h1>{sayHello()}</h1>
            <h1>{ひろみが好きな人を叫ぶ("杏樹")}</h1>
            <h1>{明日の朝ごはんは("カレー")}</h1>
            <h1>{ガソリン満タンの金額(165)}円</h1>
        </>
    )
};

export default Quiz0;