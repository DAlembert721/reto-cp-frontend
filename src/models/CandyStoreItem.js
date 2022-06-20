class CandyStoreItem {
    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    static map = item => {
        return new CandyStoreItem(
            item.id,
            item.name,
            item.description,
            item.price
        )
    }
}

export default CandyStoreItem;