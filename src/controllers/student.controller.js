class Student{
	constructor(){}
	async  getStudent() {
		// student string Nombre y apellido  del estudiante que desarrolló esta API
		// title string Nombre de su  proyecto
	
		return{
				student: "Fernando Robles",
				title: "Título del proyecto: Hama beads"
		}
	
		// return res.status(200).send(estudiante);
	}
	
}


module.exports=Student;
