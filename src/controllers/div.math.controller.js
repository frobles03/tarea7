module.exports=getDiv
 function getDiv(req, response) {
	// number1 Number SI Body Primer número
	// a sumar
	// number2 Number SI Body Segundo
	// número a
	// sumar

    const quotient = req.body.quotient
    const divisor = req.body.divisor
    let msg
    if (typeof quotient == 'number') {
        if(typeof divisor == 'number' && divisor !==0){
            const result = {
                result: quotient / divisor
            }
            return response.status(200).send(result)
        } else if(divisor===0){
                msg="el divisor debe ser distinto de 0"
        }else {
            msg = "divisor debe ser un numero"
        }
    } else {
        msg = "quotient debe ser un numero"
    } 
    return response.status(400).send(msg)
}