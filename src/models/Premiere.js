class Premiere {
    constructor(id, name, description, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
    }

    static map = premier => {
        return new Premiere(
            premier.id,
            premier.description,
            premier.description,
            premier.image
        )
    }
}

export default Premiere;