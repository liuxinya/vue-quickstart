–<template>
    <div v-if='data && show' class="comments">
        <div class="title">
            {{ `${totalComments}条评论` }}
        </div>
        <ul>
            <li v-for='(item, index) in data' :key="index">
                <div class="avatar">
                    <div class="img">
                        <img :src=item.avatar >
                    </div>
                </div>
                <div class="content">
                    <div class="comment-satus">
                        <div class="left">
                            <div class="username">{{ item.username }}</div>
                            <div class="time">{{ `${item.publishTime}小时前` }}</div>
                        </div>
                        <div class="right">
                            <span>{{ item.totalLikes }}</span>
                            <img @click='clickLike(item)' class='like' :src='getLikeImg(item)' alt="">
                        </div>
                    </div>
                    <div class="comment-info">
                        {{ item.commentInfo }}
                    </div>
                </div>
            </li>
        </ul>
        <div @click='closeComment' class="close">
            <img src="../assets/close.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Array,
        totalComments: Number
    },
    data() {
        return {
            show: true
        }
    },
    created() {
        
    },
    methods: {
        closeComment() {
            this.show = false;
            this.$emit('close');
        },
        getLikeImg(item) {
            if(!item.hasOwnProperty('isLike')) {
                this.$set(item, 'isLike', false);
            }
            return item.isLike? require('../assets/liked.svg'): require('../assets/like.svg');
        },
        clickLike(item) {
            if(item.isLike) {
                // 已经点过赞状态
                item.totalLikes = --item.totalLikes;
            }else {
                // 还未点赞
                item.totalLikes = ++item.totalLikes;
            }
            item.isLike = !item.isLike;
            this.$emit('clickLike', item);
        }
    }
}
</script>

<style scoped lang='less'>
    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .comments {
        background-color: rgba(0, 0, 0, .8);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        color: #fff;
        padding: 0 8px;
        position: relative;
        max-height: 80%;
        overflow-y: auto;
        .title {
            padding: 10px 0;
            font-size: 14px;
        }
        li {
            border-bottom: 1px solid #524a4a;
            padding: 6px 0;
            .avatar {
                width: 50px;
                text-align: center;
                vertical-align: top;
                padding-top: 5px;
                float: left;
                .img {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    border-radius: 50%;
                    overflow: hidden;
                    background-color: orange;
                    img {
                        max-width: 30px;
                        vertical-align: top;
                    }
                }
            }
            .content {
                padding-left: 50px;
                .comment-satus { 
                    overflow: hidden;
                    .left {
                        float: left;
                        text-align: left;
                        .username {
                            font-size: 14px;
                            color: #b7adad;
                        }
                        .time {
                            color: #776f6f;
                        }
                    }
                    .right {
                        float: right;
                        position: relative;
                        top: 6px;
                        color: #b7adad;
                        .like {
                            width: 16px;
                            margin-left: 4px;
                            vertical-align: top;
                        }
                    }
                }
                .comment-info {
                    text-align: left;
                    padding-right: 20px; 
                    font-size: 14px;
                }
            }
        }
        .close {
            position: absolute;
            width: 20px;
            height: 20px;
            top: 6px;
            right: 12px;
            img {
                width: 20px;
            }
        }
    }
</style>
