
 function getSum(req, response) {
	// number1 Number SI Body Primer número
	// a sumar
	// number2 Number SI Body Segundo
	// número a
	// sumar

    const number1 = req.body.number1
    const number2 = req.body.number2
    let msg
    if (typeof number1 == 'number') {
        if(typeof number2 == 'number'){
            const result = {
                result: number1 + number2
            }
            return response.status(200).send(result)
        } else {
            msg = "number2 debe ser un numero"
        }
    } else {
        msg = "number1 debe ser un numero"
    }
    return response.status(400).send(msg)
}
module.exports=getSum