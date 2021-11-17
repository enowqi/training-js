import { Text } from "@chakra-ui/layout";

console.log(12345+23456)
function 足し算(x,y){
    return x+y
}
function Quiz1() {
    return (
        <>
            <Text fontSize="5xl">{足し算(12345,23456)}</Text>
        </>
    )
};

export default Quiz1;