const APIUtil = require("./api_util")

class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.attr("user-id");
        this.followState = this.$el.attr("initial-follow-state");

        this.render();
        this.$el.on("click", this.handleClick.bind(this));
    };

    render() {
        if (this.followState === "unfollowed") {
            this.$el.prop("disabled", false);
            this.$el.text("Follow!");
        } else if (this.followState === "followed") {
            this.$el.prop("disabled", false);
            this.$el.text("Unfollow!")
        } else if (this.followState === "following") {
            this.$el.prop("disabled", true);
        } else if (this.followState === "unfollowing") {
            this.$el.prop("disabled", true);
        }
    }

    handleClick(event) {
        event.preventDefault();
        const userId = this.userId
        if (this.followState === "unfollowed") {
            this.followState = "following";
            this.render()

            APIUtil.followUser(userId).then(this.successFollow.bind(this));
        } else {
            this.followState = "unfollowing";
            this.render();

            APIUtil.unfollowUser(userId).then(this.successUnfollow.bind(this));
        }
    }

    successFollow() {
        this.$el.attr("initial-follow-state", "followed");
        this.followState = "followed";
        this.render();
    }

    successUnfollow() {
        this.$el.attr("initial-follow-state", "unfollowed");
        this.followState = "unfollowed";
        this.render();
    }
};


module.exports = FollowToggle;