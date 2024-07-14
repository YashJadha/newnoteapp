import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Topic = mongoose.models.topics || mongoose.model('topics', TopicSchema);
export default Topic;