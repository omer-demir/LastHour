(function (app) {
    var mongoose = require('mongoose');
    var schema = mongoose.Schema;

    var topicSchema = new schema({
        title: { type: String },
        content: { type: String },
        createDate: { type: Date, default: Date.now },
        postedBy: {
            type: schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [{
            content: { type: String },
            postedBy: {
                type: schema.Types.ObjectId,
                ref: 'User'
            },
            upVoteCount: Number,
            downVoteCount: Number
        }],
        upVoteCount: Number,
        downVoteCount: Number
    }, {
            collection: "topics"
        })

    app.topic = mongoose.model("Topic", topicSchema);
} (module.exports));