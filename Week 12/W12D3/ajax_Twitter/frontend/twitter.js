const FollowToggle = require("./follow_toggle");

$(() => {
    $("button.follow-toggle").each((index, toggleButton) => {
        new FollowToggle(toggleButton);
    })
})