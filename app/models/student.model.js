module.exports = (mongoose) => {
    
    const AddressSchema = mongoose.Schema({
        street: String,
        subDistrict1: String,
        subDistrict2: String,
        district: String,
        province: String,
        postalCode: String
    })

    const StudentSchema = mongoose.Schema(
        {
            studentId : String,
            name : String,
            address : {
                type : AddressSchema
            },
           placeOfBirth : String,
           dateOfBirth: String,
           sex : String,
           religion : String,
           major : String,
           year : String
        }
    )
    
    StudentSchema.method("toJSON", function() {
        const {__v,_id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Student = mongoose.model("students",StudentSchema)
    return Student
}