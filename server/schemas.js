/**
 * Created by Ivaylo on 18.6.2016 г..
 */
HackSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    imagePath:{
        type: String,
        label: "Image path",
        max: 100
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    },
    difficulty: {
        type: String,
        label: "Difficulty"
    },
    trackLength: {
        type: Number,
        label: "Track length"
    },
    hackLength: {
        type: Number,
        label: "Length in weeks"
    },
    premium: {
        type: Boolean,
        label: "Only accessible to paid subscribers"
    },
});