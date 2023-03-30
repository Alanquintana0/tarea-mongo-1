/*
2) El conjunto de datos contiene 4 calificaciones de n estudiantes. Confirma que se importo correctamente la colección con los siguientes comandos en la terminal de mongo: >use students; >db.grades.count() ¿Cuántos registros arrojo el comando count?
*/
db.Grades.countDocuments();
800
/*
3) Encuentra todas las calificaciones del estudiante con el id numero 4.
*/
db.Grades.find({"student_id": 4});
{
    _id: ObjectId("50906d7fa3c412bb040eb587"),
    student_id: 4,
    type: 'exam',
    score: 87.89071881934647
}
{
    _id: ObjectId("50906d7fa3c412bb040eb588"),
    student_id: 4,
    type: 'quiz',
    score: 27.29006335059361
}
{
    _id: ObjectId("50906d7fa3c412bb040eb589"),
    student_id: 4,
    type: 'homework',
    score: 5.244452510818443
}
{
    _id: ObjectId("50906d7fa3c412bb040eb58a"),
    student_id: 4,
    type: 'homework',
    score: 28.656451042441
}
/*
4) ¿Cuántos registros hay de tipo exam?
*/
db.Grades.countDocuments({"type": "exam"});
200
/*
5) ¿Cuántos registros hay de tipo homework?
*/
db.Grades.countDocuments({"type": "homework"});
400
/*
6) ¿Cuántos registros hay de tipo quiz?
*/
db.Grades.countDocuments({"type": "quiz"});
200
/*
7) Elimina todas las calificaciones del estudiante con el id numero 3
*/
db.Grades.deleteMany({"student_id": 3});
{
    acknowledged: true,
    deletedCount: 4
}
/*
8) ¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea ?
*/
db.Grades.find({"score": 75.29561445722392, "type": "homework"});
{
    _id: ObjectId("50906d7fa3c412bb040eb59e"),
    student_id: 9,
    type: 'homework',
    score: 75.29561445722392
}
/*
9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100
*/
db.grades.updateOne({uuid:"50906d7fa3c412bb040eb591"},{$set:{score:100}});
{
    acknowledged: true,
    insertedId: null,
    matchedCount: 0,
    modifiedCount: 0,
    upsertedCount: 0
  }
/*
10) A qué estudiante pertenece esta calificación.
*/ 
db.Grades.find({"score": 100});
