User: {
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    Role: String
}
Category{
    Name: {
        type: String,
            Post: [{
                title: String, desc: String, img: String, price: Number,
                comments: [{ title: String, desc: String, price: Number, publishedBy: String }]
            }]
    }
}
