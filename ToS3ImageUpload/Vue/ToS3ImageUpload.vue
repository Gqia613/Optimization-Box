<template>
    <form
        id="createRecipeForm"
        action="/mypage/register"
        method="post"
        enctype="multipart/form-data"
        class="mt-3"
    >
        <div class="form-group mt-2">
            <label for="image"
                >画像：<span class="text-danger">＊必須</span></label
            >
            <input
                id="image"
                ref="file"
                type="file"
                class="form-control-file"
                @change="setImage"
            />
            <img v-if="thumbnail" :src="thumbnail" class="thumbnail" />
        </div>
        <div class="row mt-3">
            <button
                id="registerBtn"
                type="button"
                class="col col-4 btn btn-warning mx-auto"
                @click="registerRecipe"
            >
                登録
            </button>
        </div>
    </form>
</template>

<script>
import axios from "axios"
export default {
    name: "Example",
    data: () => ({
        form: {
            image: "",
        },
        thumbnail: null,
    }),
    methods: {
        registerRecipe() {
            const formData = new FormData()
            formData.append("image", this.form.image)

            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            }

            axios
                .post("/api/recipes/store", formData, config)
                .then(res => {
                    this.$router.push({
                        name: "Example",
                        params: res.data
                    })
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                })
        },
        setImage(e) {
            const files = this.$refs.file

            if (files.files[0] !== undefined) {
                const file = files.files[0]
                const type = file.type
                if (
                    type !== "image/jpeg" &&
                    type !== "image/png" &&
                    type !== "image/webp"
                ) {
                    alert("選択されたファイルはアップロードできません")
                    e.currentTarget.value = ""
                    this.form.image = null
                    this.thumbnail = null
                    return false
                }
                this.form.image = file
                if (this.form.image.type.startsWith("image/")) {
                    this.thumbnail = window.URL.createObjectURL(this.form.image)
                }
            } else {
                this.form.image = ""
                this.thumbnail = null
            }
        }
    }
}
</script>

<style scoped>
.thumbnail {
    max-width: 200px;
    max-height: 150px;
}
</style>
