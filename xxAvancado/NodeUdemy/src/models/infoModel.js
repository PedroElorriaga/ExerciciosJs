const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: false,
        }
    }
)

const InfoModel = mongoose.model('Info', infoSchema)

class Info {
    constructor(data) {
        this.data = data,
            this.exceptions = []
    }

    async createData() {
        if (this.data.username == '' || this.data.city == '') {
            return this.exceptions.push('Campo vázio')
        }

        const usernameFromDb = await InfoModel.findOne({ username: this.data.username })

        if (usernameFromDb) {
            return this.exceptions.push('Username já esta sendo utilizado')
        }

        await InfoModel.create(this.data)
    }
}

module.exports = Info