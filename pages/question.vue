<template>
  <div dir="rtl">
    <div v-if="myauth">
    <div class="row">
      <aside class="col-md-2">
    <div class="logo">
      <p>أحمد السوليه</p>
    </div>
    <div class="main-pages">
      <ul>
        <li>
        <nuxt-link to="home">
          <i class="fas fa-house-user mr-1"></i> الصفحة الرئيسية
        </nuxt-link>
        </li>
        <li>
        <nuxt-link to="student">
           <i class="fas fa-users mr-1"></i> الطلاب
            </nuxt-link>
                    </li>

        <li>
        <nuxt-link to="group">
        <i class="fas fa-layer-group mr-1"></i> المجموعات
        </nuxt-link>
        </li>
        <li><i class="far fa-calendar-alt mr-1"></i> المواعيد</li>
        <li class="active">
        <nuxt-link to="question">
        <i class="far fa-sticky-note mr-1"></i> الاختبارات
           </nuxt-link>
           </li>
        <li><i class="fas fa-cog mr-1"></i> الاعدادات</li>
        <li @click="logout" > <i class="fas fa-sign-out-alt"></i> خروج </li>
      </ul>
    </div>
  </aside>
    <!-- <header class="col-md-8">
    <div class="row">
      <div class="header-search col-md-3 col-sm-2  ml-8">
        <i class="fas fa-search"></i>

        <input type="search" name="header_search" id="headersearch" placeholder="بحث" />
      </div>

      <div class="col-md-2">
        <div class="admin-photo"></div>
        <div class="admin-login-settings">
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
    </div>
  </header> -->
  <header class="col-md-9">
    <div class="row">
      <div class="header-search col-md-3">
        <i class="fas fa-search"></i>

        <input type="search" name="header_search" id="headersearch" placeholder="بحث" />
      </div>

      <div class="col-md-7"></div>

      <div class="col-md-2">
        <div class="admin-photo"></div>
        <div class="admin-login-settings">
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
    </div>
  </header>
  <section>
    <div class="col-md-9 buttons">
      <button>
        انشاء امتحان
      </button>
      <button style="display: none;"></button>
      <button>
        انشاء تصويت
      </button>
    </div>
  </section>
    <article class="col-md-9">
    <div class="layers">
      <div class="add-question">
        <div class="add-question-header">
          <h4>اعداد الاسئلة</h4>
        </div>
        <div class="clearfix">

        </div>
        <hr>
        <h6 class="heading-quesion">ملحوظة: الاجابات الصحيحة هي الاجابة الأولي</h6>

        <div class="add-question-body mt-5">
            <form method="POST" class="mx-auto w-100" autocomplete="off">
          <div class="question-container">
            <label for="question_input">السؤال</label><br>
            <input type="text" name="question" id="question_input">
            <select name="exam_type">
              <option selected disabled>اختر نوع السؤال</option>
              <option value="mcq_question">اختيار من متعدد</option>
              <option value="true_fales_question">صح ام خطأ</option>
              <option value="images_question">اختار صورة</option>
            </select>

            <div class="mcq-question">
              <input type="text" name="correct_answer[]">

              <div class="wrong-answer">
                <input type="text" name="wrong_answer[]">
              </div>
              <button class="ok-button mt-2" id="more_answers">اضافة اجابة</button>

              <button class="refuse-button mt-2" id="delete_answer">حذف اجابة</button>
            </div>

            <div class="true-false-question">
              <div class="answer-element">
                <input type="radio" name="gender" value="7amada" id="7amada" />
                <label for="7amada">صح</label>
              </div>
              <div class="answer-element">
                <input type="radio" name="gender" value="metnak" id="metnak" />
                <label for="metnak">خطأ</label>
              </div>
            </div>

            <div class="images-question">

              <div class="input-file w-50">
                <input type="file" accept="image/*" id="file" class="inputfile">
                <label for="file">اختيار صورة</label>
                <img id="output" />
              </div>

              <div class="input-file w-49">
                <input type="file" accept="image/*" id="file1" class="inputfile">
                <label for="file1">اختيار صورة</label>
                <img id="output1" />
              </div>

              <div class="input-file w-50">
                <input type="file" accept="image/*" id="file2" class="inputfile">
                <label for="file2">اختيار صورة</label>
                <img id="output2" />
              </div>

              <div class="input-file w-49">
                <input type="file" accept="image/*" id="file3" class="inputfile">
                <label for="file3">اختيار صورة</label>
                <img id="output3" />
              </div>
            </div>
<hr>
            <button class="ok-button">حفظ</button>
          </div>


          </form>

        </div>
      </div>
    </div>

  </article>
    </div>
    </div>
    <p v-else>
      Please
      <NuxtLink to="/">
        login
      </NuxtLink>.
    </p>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
    middleware: 'authenticated',
data() {
          return {
              dataTable: null,
              externalLoaded: false,
                  myauth : localStorage.getItem("auth")

          }
        },
        mounted() {
          console.log('table mounted');
            if(this.dataTable === null){
                this.onScriptLoaded();
            }
        },
        methods: {
                        logout () {
      console.log(123);
      localStorage.removeItem("auth")
      //this.$store.commit('setAuth', null)
      this.$router.push("/");
    },
            onScriptLoaded() {
                this.externalLoaded = true;
                console.log('script loaded');
                    this.dataTable = $('#example').DataTable();
                    $("select").change(function () {
  var mcqQuestion = $('.mcq-question');
  var trueFalse = $('.true-false-question');
  var imagesQuestion = $('.images-question');
    $("select option:selected").each(function () {
      var value = $(this).val();
      if(value === 'mcq_question') {
        trueFalse.css("display", "none");
        mcqQuestion.css("display", "block");
        imagesQuestion.css("display", "none");
      } else if(value === "true_fales_question") {
        trueFalse.css("display", "block");
        mcqQuestion.css("display", "none");
        imagesQuestion.css("display", "none");
      } else if(value === "images_question") {
        imagesQuestion.css("display", "block");
        trueFalse.css("display", "none");
        mcqQuestion.css("display", "none");
      } else {
        imagesQuestion.css("display", "none");
        trueFalse.css("display", "none");
        mcqQuestion.css("display", "none");
      }
    });
  })
  .change();
$(".answer-element input").on("click", function () {
  var selectedAnswer = $(this).parent();
  var allAnswers = $(this).parent().parent().children();
  allAnswers.removeClass("selected-answer");
  selectedAnswer.addClass("selected-answer");
});
$("#more_answers").click(function () {
  $(".wrong-answer").append('<input type="text" name="wrong_answer[]">');
});
$("#delete_answer").click(function () {
  console.log("hahahah");
  $(".wrong-answer input").last().remove();
});

var file = document.getElementById("file"),
file1 = document.getElementById("file1"),
file2 = document.getElementById("file2"),
file3 = document.getElementById("file3");
file.onchange = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
file1.onchange = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output1");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
file2.onchange = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output2");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
file3.onchange = function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("output3");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
},
            update() {
                let indexes = this.dataTable
                            .rows()
                            .indexes()
                            .filter(( value, index ) =>  {
                                return 'Ashton Cox' === this.dataTable.row(value).data()[0];
                            } );

                if(!indexes[0]){
                    console.log('No such item');
                    return;
                }
                // console.log(indexes[0]);

                // Get the row for indexes[0]
                let row = this.dataTable.row(indexes[0]);

                // Get the data for the row
                let data = row.data();

                // Change the position to `Engineer`
                data[1] = 'Software Engineer';
                data[5] = '$256,811';
                // Update the table data and redraw the table
                row.data( data ).draw();
            }
        }

}
</script>

<style scoped>
aside .main-pages ul li a{
  color: inherit;
}
aside .main-pages ul li a:hover{
  text-decoration: none;
}
.add-question-header h4{
    margin-bottom: 5%;
    padding-right: 2%;
    padding-top: 2%;
    }
    h6.heading-quesion{
  margin-bottom:6%;
  }
.ml-8{
  margin-left: 8%;
}
.row{
  text-align: right;
}
input:focus{
color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);}
aside{
  margin: 0;
}
.table-container {
  background-color: #fff;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 10px;
  position: relative;
  margin-top: 1rem;
}
.table-container select {
  padding: 2px !important;
  width: 4rem !important;
  text-align: center !important;
  margin: 0 6px !important;
}
.table-container h4 {
  padding: 1rem;
}
.table-container .the-table {
  border: none;
  padding-bottom: 10px;
}
.table-container .dataTables_wrapper {
  padding: 10px !important;
  color: #242424;
}
.table-container .dataTables_wrapper .dt-buttons {
  padding-left: 15px !important;
  padding-bottom: 15px;
}
.table-container .dataTables_wrapper .dt-buttons .dt-button {
  color: #fd7b38;
}
.table-container .dataTables_wrapper .dataTables_filter,
.table-container .dataTables_wrapper .dataTables_filter input {
  color: #fd7b38 !important;
}
.table-container .dataTables_wrapper .dataTables_wrapper .dataTables_paginate .paginate_button.disabled,
.table-container .dataTables_wrapper .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover,
.table-container .dataTables_wrapper .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {
  color: #fd7b38 !important;
}
.table-container .dataTables_wrapper .dataTables_info {
  color: #fd7b38 !important;
}
.table-container .dataTables_wrapper th {
  color: #242424;
}
.table-container .dataTables_wrapper .sorting_desc,
.table-container .dataTables_wrapper .sorting,
.table-container .dataTables_wrapper .sorting_asc {
  border-top: 1px solid #ddd;
  color: #242424;
  border-bottom: 1px solid #ddd;
  background-color: rgba(253, 123, 56, 0.2);
}
.table-container .dataTables_wrapper .dataTables_length {
  text-align: center;
}
.table-container .hide_column {
  display: none;
}

.styled-table {
  overflow: auto;
}
.styled-table tr:nth-child(even) {
  background-color: #f7f6f4;
}
.styled-table td {
  padding: 12px 15px;
}
.styled-table td:last-child {
  display: none;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  left: 1rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
}

.ok-button {
  background-color: #27AE60;
}

.refuse-button {
  background-color: #EB5757;
}

.show-button {
  background-color: #2F80ED;
}

.delete-modal .modal-header h5 {
  color: #EB5757;
}
.delete-modal .modal- p {
  font-size: 14px;
}
.delete-modal .modal-footer .confirm-delete {
  background-color: #EB5757;
}
input#\37 amada ,input#metnak{
  width: auto;
}
input {
  background-color: #f8f8f8 !important;
  border: none !important;
  color: #242424;
  height: 2rem;
height: 2.5rem;
  width: 31rem;
  margin-bottom: 2%;
}
 article .add-question .add-question-body .question-container .true-false-question .answer-element label {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 1rem;
    cursor: pointer;
}
input[type=radio]:checked > .answer-element {
  background-color: #EB5757;

}
 article .add-question .add-question-body .question-container .true-false-question .selected-answer {
    background-color: rgba(253, 123, 56, 0.2) !important;
    border: 1px solid #fd7b38 !important;
}
 article .add-question .add-question-body .question-container .true-false-question .answer-element {
    border: 1px solid #242424;
    margin: 1rem 0;
    text-align: center;
    background-color: #f7f6f4;
    cursor: pointer;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none !important;
  background: url("./images/selectarrow.svg") #fd7b38 no-repeat 0 !important;
  /* Better placement regardless of input width */
  background-color: #f8f8f8 !important;
  color: #242424;
  float: left;
    width: 12rem;
    padding: .5% 2%;
}

label {
  color: #fd7b38 !important;
  font-weight: bold !important;
}

aside {
  position: fixed !important;
  width: 200px;
  height: 200px;
  display: inline-block;
  height: 1045px;
  background: #ffffff;
  /* main shadow */
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 10px;
}
aside .logo {
  color: #242424;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 2;
}
aside .main-pages ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
aside .main-pages ul li {
  padding: 0.5rem;
  color: #65676d;
  cursor: pointer;
}
aside .main-pages ul li.active a {
  background: rgba(253, 123, 56, 0.2);
  color: #fd7b38;
      color: #fd7b38;
    padding: 2% 5% 2% 30%;
}

header {
  position: fixed !important;
  top: 0.8rem;
  left: 3rem;
  height: 4em;
  background: #ffffff;
  /* main shadow */
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 10px;
  z-index: 5;
}
header .header-search input {
  background: #f8f8f8;
  border-radius: 5px;
  border: none;
  position: absolute;
  top: 0.5rem;
  height: 2rem;
  width: 17rem;
}
header .header-search input:focus {
  outline: #fd7b38;
  border: 1px solid #fd7b38;
}
header .header-search input::placeholder {
  position: absolute;
  color: #242424;
  opacity: 1;
  padding-right: 2rem;
}
header .header-search .fa-search {
  color: #242424;
  transform: rotate(90deg);
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  z-index: 2;
}
header .admin-photo {
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 4rem;
  top: 0.5rem;
  border-radius: 50%;
  background: url(./images/Ahmed.jpg);
  background-size: cover;
  /* main */
  z-index: 5;
  border: 1px solid #fd7b38;
}
header .admin-login-settings {
  position: absolute;
  left: 2rem;
  top: 0.5rem;
}
header .admin-login-settings .fa-ellipsis-v {
  color: #242424;
  margin-top: 0.3rem;
  font-size: 1.3rem;
}

section .buttons {
  position: absolute;
  top: 6rem;
  left: 2rem;
}
section .buttons button:nth-child(1) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  position: absolute;
  border-radius: 5px;
  right: 0rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
}
section .buttons button:nth-child(2) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  position: absolute;
  border-radius: 5px;
  right: 10rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
}
section .buttons button:nth-child(3) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  position: absolute;
  border-radius: 5px;
  left: 1rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
}

.layers {
  position: absolute;
  width: 100%;
  left: -29%;
  top: 9rem;
}

body {
  box-sizing: border-box;
  font-family: "Tajawal", "Times New Roman", Times, serif;
  background-color: #f7f6f4;
}
 article .now-lesson {
  background-color: #fff;
  height: 14rem;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 10px;
  position: relative;
}
 article .now-lesson .svg-content {
  text-align: center;
}
 article .now-lesson h4 {
  padding: 1rem;
}
 article .now-lesson .group-element-now {
  position: absolute;
  background-color: rgba(253, 123, 56, 0.2);
  border-radius: 5px;
  right: 2rem;
  top: 5rem;
  padding: 0.5rem 1.5rem;
}
 article .now-lesson .students-menu {
  position: absolute;
  right: 15rem;
  top: 58%;
  cursor: pointer;
}
 article .now-lesson .attendance-menu {
  position: absolute;
  right: 25rem;
  top: 58%;
  cursor: pointer;
}
 article .now-lesson .make-exam {
  position: absolute;
  right: 40rem;
  top: 5rem;
  font-size: 1.3rem;
}
 article .now-lesson .make-exam .fa-sticky-note {
  font-size: 7rem;
  color: #fd7b38;
}
 article .now-lesson .make-vote {
  position: absolute;
  right: 50rem;
  top: 5rem;
  font-size: 1.3rem;
}
 article .now-lesson .make-vote .fa-poll {
  font-size: 7rem;
  color: #fd7b38;
}
 article .now-lesson .share-file {
  position: absolute;
  right: 60rem;
  top: 5rem;
  font-size: 1.3rem;
}
 article .now-lesson .share-file .fa-file-medical {
  font-size: 7rem;
  color: #fd7b38;
}
 article .today-lessons {
  background-color: #fff;
  height: 14rem;
  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  border-radius: 10px;
  position: relative;
  margin-top: 1rem;
}
 article .today-lessons h4 {
  padding: 1rem;
}
 article .today-lessons .group-element {
  position: absolute;
  background-color: #f8f8f8;
  border-radius: 5px;
  right: 15rem;
  top: 5rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}
 article .today-lessons div:nth-child(2) {
  right: 2rem;
  top: 5rem;
}
 article .today-lessons div:nth-child(3) {
  right: 28rem;
}
 article .today-lessons div:nth-child(4) {
  right: 41rem;
}
 article .today-lessons div:nth-child(5) {
  right: 54rem;
}
 article .today-lessons .group-element-select {
  position: absolute;
  background-color: rgba(253, 123, 56, 0.2);
}
 article .add-question .add-question-body .question-container .images-question .input-file {
    display: inline-block;
}
.w-50 {
    width: 50%!important;
}
article .add-question .add-question-body .question-container .images-question .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}
article .add-question .add-question-body .question-container .images-question img {
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 7rem;
    height: 7rem;
}
article .add-question .add-question-body .question-container .images-question .inputfile + label {
    cursor: pointer;
}
article .add-question .add-question-body .question-container .images-question .inputfile + label {
    font-size: 1.25em;
    color: white;
    width: 7rem;
    text-align: center;
    border-radius: 2px;
    border: 1px solid #3978b8;
    display: inline-block;
    font-weight: lighter;
}
article .add-question .add-question-body .question-container .true-false-question .answer-element input[type=radio] {
  display: none;
}
</style>
