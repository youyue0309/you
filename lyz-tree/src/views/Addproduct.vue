<template>
  <div id="addpro">
    <div class="add">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="名称" prop="product">
          <el-input v-model="ruleForm.product"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="ruleForm.price"></el-input>
        </el-form-item>
        <el-form-item label="省份" prop="city">
          <el-input v-model="ruleForm.city"></el-input>
        </el-form-item>
        <el-form-item label="高度" prop="high">
          <el-input v-model="ruleForm.high"></el-input>
        </el-form-item>
        <el-form-item label="直径" prop="r">
          <el-input v-model="ruleForm.r"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="ruleForm.type"></el-input>
        </el-form-item>
        <el-form-item label="总量" prop="productsum">
          <el-input v-model="ruleForm.productsum"></el-input>
        </el-form-item>
        <div class="img">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <el-form-item class="make">
          <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/servie.config.js";
export default {
  data() {
    return {
      imageUrl: "",
      dialogVisible: false,
      ruleForm: {
        price: 0,
        product: "",
        city: "",
        type: 1,
        productsum: "",
        high: "",
        r: ""
      },
      rules: {
        product: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 1, max: 30, message: "长度在 1 到 30 个字符", trigger: "blur" }
        ],
        productsum: [
          { required: true, message: "请输入总量", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个数字", trigger: "blur" }
        ],
        type: [
          { required: true, message: "请输入类别", trigger: "blur" },
          { min: 1, max: 1, message: "1-8", trigger: "blur" }
        ],
        high: [
          { required: true, message: "请输入高度", trigger: "blur" },
          { min: 1, max: 3, message: "1-100", trigger: "blur" }
        ],
        r: [
          { required: true, message: "请输入直径", trigger: "blur" },
          { min: 1, max: 2, message: "1-10", trigger: "blur" }
        ],
        price: [
          { required: true, message: "请输入价格", trigger: "blur" },
          { min: 1, max: 10, message: "0-999", trigger: "blur" }
        ],
        city: [
          { required: true, message: "请输入省份城市", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(this.imageUrl)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            url: url.addProduct,
            method: "post",
            data: {
              product: this.ruleForm.product,
              price: this.ruleForm.price,
              high: this.ruleForm.high,
              city: this.ruleForm.city,
              r: this.ruleForm.r,
              type: this.ruleForm.type,
              productsum: this.ruleForm.productsum,
              img: this.imageUrl
            }
          })
            .then(res => {
              console.log(res);
              alert("添加成功");
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
#addpro {
  .add {
    padding-top: 50px;
    width: 700px;
    margin: 20px auto;
    .demo-ruleForm {
      overflow: hidden;
      .el-form-item {
        width: 350px;
        float: left;
      }
      .make {
        clear: left;
        width: 700px;
        margin-top: 20px;
        text-align: center;
      }
      .img {
        float: left;
        width: 178px;
        height: 178px;
        padding-left: 100px;
        .avatar-uploader {
          border: 1px dashed #d9d9d9;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .el-upload{
          border: 1px dashed #d9d9d9;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .avatar-uploader {
          border-color: #409eff;
        }
        .el-upload:hover{
          border-color: #409eff;
        }
        .avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 178px;
          height: 178px;
          line-height: 178px;
          text-align: center;
        }
        .avatar {
          width: 178px;
          height: 178px;
          display: block;
        }
      }
    }
  }
}
</style>