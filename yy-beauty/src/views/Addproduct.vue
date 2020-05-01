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
        <el-form-item label="名称" prop="chname">
          <el-input v-model="ruleForm.chname"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="ruleForm.price"></el-input>
        </el-form-item>
        <el-form-item label="色号" prop="color">
          <el-input v-model="ruleForm.color"></el-input>
        </el-form-item>
        <el-form-item label="容量" prop="ml">
          <el-input v-model="ruleForm.ml"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="ruleForm.type"></el-input>
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
        chname: "",
        color: "",
        type: 1,
        ml: "",
      },
      rules: {
        chname: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 1, max: 30, message: "长度在 1 到 30 个字符", trigger: "blur" }
        ],
        ml: [
          { required: true, message: "请输入容量", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个数字", trigger: "blur" }
        ],
        type: [
          { required: true, message: "请输入类别", trigger: "blur" },
          { min: 1, max: 1, message: "1-8", trigger: "blur" }
        ],
        color: [
          { required: true, message: "请输入色号", trigger: "blur" },
          { min: 1, max: 30, message: "色号", trigger: "blur" }
        ],
        price: [
          { required: true, message: "请输入价格", trigger: "blur" },
          { min: 1, max: 10, message: "0-999", trigger: "blur" }
        ],
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
              chname: this.ruleForm.chname,
              price: this.ruleForm.price,
              color: this.ruleForm.color,
              ml: this.ruleForm.ml,
              type: this.ruleForm.type,
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
    width: 700px;
    margin: 20px auto;
    .demo-ruleForm {
      overflow: hidden;
      .el-form-item {
        width: 350px;
      }
      .make {
        margin-top: 20px;
      }
      .img {
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