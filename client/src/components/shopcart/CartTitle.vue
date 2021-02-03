<template>
    <div class="title_line">
        <span class="title">{{title}}</span>
    </div>
</template>

<script>
export default {
    props: [
        'title'
    ]
}
</script>

<style lang="less" scoped>
    .title_line{
        position: relative;
        text-align: center;
        margin: 15px 0;
        height: 1em;
        line-height: 1em;
        font-size: 12px;
        color: #999;
         &::after {
            content: "";
            position: absolute;
            z-index: 1;
            pointer-events: none;
            background-color: #ccc;
            height: 1px;
            left: 0;
            right: 0;
            top: 50%;
         }
         .title {
             z-index: 2;
             position: relative;
             padding: 0 15px;
             background-color: #f7f7f7;
             &::after, &::before {
                 content: "";
                 position: absolute;
                 pointer-events: none;
                 background-color: #ccc;
                 height: 4px;
                 width: 4px;
                 top: 50%;
                 margin-top: -1px;
                 transform: rotate(45deg);
             }
             &::after {
                 left: 0;
             }
             &::before {
                 right: 0;
             }
         }
    }
   
</style>