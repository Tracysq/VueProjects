<template>
    <div class="reg-form">
        <div class="g-form">
            <div class="g-form-line" v-for="formLine in formData">
                <span class="g-form-label">{{ formLine.label }}</span>
                <div class="g-form-input">
                    <input type="text" v-model="formLine.model" placeholder="请输入用户名">
                </div>
            </div>
            <div class="g-form-line">
                <div class="g-form-btn">
                    <a class="button" @click="onReg">注册</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData: [{
                    label: '用户名：',
                    model: ''
                }, {
                    label: '密码：',
                    model: ''
                }, {
                    label: '邮箱：',
                    model: ''
                }]
            }
        },
        methods: {
            onReg() {
                console.log('register');
            }
        }
    }
</script>

<style scoped>

</style>