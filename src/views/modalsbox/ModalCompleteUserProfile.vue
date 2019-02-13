<template>
  <div id="modal-complete-user-profile" ref="modalCompleteUserProfile">
    <div id="container" class="cf popup_history wrapper_div show">
      <!-- Modal -->
      <div
        id="modalCompleteUserProfile"
        class="modal fade bd-example-modal-lg-main"
        role="dialog"
        style="display: none;"
      >
        <div class="modal-dialog" style="width: 100%; height:600px; margin: 0px auto;">
          <div class="popup-close-btn">
            <a href="#" data-dismiss="modal">
              <img src="images/popup/close_icon.png">
            </a>
          </div>
          <!-- Modal content-->
          <div class="modal-content">
            <div class="wizard-container">
              <div class="card wizard-card" data-color="red" id="wizard">
                <form action method>
                  <div class="wizard-header">
                    <h3 class="wizard-title">Complete your Profile</h3>
                    <p class="category">This information will let us know more about your place.</p>
                  </div>
                  <div class="wizard-navigation">
                    <div class="progress-with-circle">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        aria-valuenow="1"
                        aria-valuemin="1"
                        aria-valuemax="4"
                        style="width: 15%;"
                      ></div>
                    </div>
                    <ul>
                      <li>
                        <a href="#location" data-toggle="tab">
                          <div class="icon-circle">
                            <i class="fa fa-map"></i>
                          </div>Location
                        </a>
                      </li>
                      <li>
                        <a href="#type" data-toggle="tab">
                          <div class="icon-circle">
                            <i class="fa fa-images"></i>
                          </div>Upload Image
                        </a>
                      </li>
                      <li>
                        <a href="#facilities" data-toggle="tab">
                          <div class="icon-circle">
                            <i class="fa fa-info"></i>
                          </div>Personal Info
                        </a>
                      </li>
                      <li>
                        <a href="#description" data-toggle="tab">
                          <div class="icon-circle">
                            <i class="fa fa-comment"></i>
                          </div>Comments
                        </a>
                      </li>
                      <li>
                        <a href="#status" data-toggle="tab">
                          <div class="icon-circle">
                            <i class="fas fa-award"></i>
                          </div>status
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="tab-content">
                    <div class="tab-pane" id="location">
                      <div class="row">
                        <div class="col-sm-12">
                          <h5 class="info-text">Let's start with the basic details</h5>
                        </div>
                        <div class="col-sm-5 col-sm-offset-1">
                          <div class="form-group">
                            <label>Country</label>
                            <br>
                            <select name="country" class="form-control">
                              <option disabled selected>- country -</option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">American Samoa</option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Anguilla">Anguilla</option>
                              <option value="Antarctica">Antarctica</option>
                              <option value="...">...</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-5">
                          <div class="form-group">
                            <label>City</label>
                            <select class="form-control" name="your_city1">
                              <option>--Please Select--</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-5 col-sm-offset-1">
                          <div class="form-group">
                            <label>Street</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="What's your Street?"
                            >
                          </div>
                        </div>
                        <div class="col-sm-5">
                          <div class="form-group">
                            <label>House No.</label>
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="What's your House Number"
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="type">
                      <h5 class="info-text">Upload your image</h5>
                      <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                          <div class="well">
                            <input type="file" name="myImage1">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="facilities">
                      <h5 class="info-text">Birthday</h5>
                      <div class="row">
                        <div class="col-sm-5 col-sm-offset-1">
                          <div class="form-group">
                            <label>Birth in</label>
                            <select class="form-control" name="your_date">
                              <option>--Please Select--</option>
                              <option>Bakur</option>
                              <option>Basur</option>
                              <option>Rojava</option>
                              <option>Rojhilat</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-5">
                          <div class="form-group">
                            <label>City</label>
                            <select class="form-control" name="your_city">
                              <option>--Please Select--</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-5 col-sm-offset-1">
                          <div class="form-group">
                            <label>Your Language</label>
                            <select class="form-control" name="your_language">
                              <option>--Please Select--</option>
                              <option>Badini</option>
                              <option>Kurmanci</option>
                              <option>Sazaki</option>
                              <option>Sorani</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-5">
                          <div class="form-group">
                            <label>Your Clan</label>
                            <select class="form-control" name="your_clan">
                              <option>--Please Select--</option>
                              <option>Aliki</option>
                              <option>Boti</option>
                              <option>Hermesi</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-5 col-sm-offset-1">
                          <div class="form-group">
                            <label>Date of Birth</label>
                            <input
                              type="date"
                              class="form-control"
                              name="dateofbirth"
                              id="dateofbirth"
                              placeholder="mm/dd/yyyy"
                            >
                          </div>
                        </div>
                        <div class="col-sm-5">
                          <div class="form-group">
                            <label>Status</label>
                            <select class="form-control" name="your_status">
                              <option>--Please Select--</option>
                              <option>Single</option>
                              <option>Married</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="description">
                      <div class="row">
                        <h5 class="info-text"></h5>
                        <div class="col-sm-10 col-sm-offset-1">
                          <div class="form-group">
                            <label>Tell us about you</label>
                            <textarea class="form-control" placeholder rows="9"></textarea>
                            <label class="checkbox">
                              <input type="checkbox">
                              <span class="indicator"></span>
                              Accept Policy and Terms
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="status">
                      <div class="row">
                        <h5 class="info-text"></h5>
                        <div class="col-sm-10 col-sm-offset-1">
                          <div class="form-group">
                            <div class="comparison">
                              <table style="width:105%;">
                                <thead>
                                  <tr>
                                    <th class="tl tl2"></th>
                                    <th
                                      class="product"
                                      style="background:#69C7F1; border-top-left-radius: 5px; border-left:0px;"
                                    >Product_1</th>
                                    <th class="product" style="background:#69C7F1;">Product_2</th>
                                    <th
                                      class="product"
                                      style="border-top-right-radius: 5px; border-right:0px; background:#69C7F1;"
                                    >Product_3</th>
                                  </tr>
                                  <tr>
                                    <th></th>
                                    <th class="price-info">
                                      <div class="price-now">
                                        <span>$ Price</span>
                                        <p>/ year</p>
                                      </div>
                                    </th>
                                    <th class="price-info">
                                      <div class="price-now">
                                        <span>$ Price</span>
                                        <p>/ year</p>
                                      </div>
                                    </th>
                                    <th class="price-info">
                                      <div class="price-now">
                                        <span>$ Price</span>
                                        <p>/ year</p>
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td></td>
                                    <td colspan="3">item_1</td>
                                  </tr>
                                  <tr class="compare-row">
                                    <td>item_1</td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                    <td>
                                      <span>–</span>
                                    </td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td colspan="3">item_2</td>
                                  </tr>
                                  <tr>
                                    <td>item_2</td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                    <td>
                                      <span>–</span>
                                    </td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td colspan="3">item_3</td>
                                  </tr>
                                  <tr class="compare-row">
                                    <td>item_3</td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                    <td>
                                      <span>–</span>
                                    </td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td colspan="4">item_4</td>
                                  </tr>
                                  <tr>
                                    <td>item_4</td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                    <td>
                                      <span>–</span>
                                    </td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td colspan="3">item_5</td>
                                  </tr>
                                  <tr class="compare-row">
                                    <td>item_5</td>
                                    <td>
                                      <span>–</span>
                                    </td>
                                    <td>
                                      <span>–</span>
                                    </td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td colspan="4">item_6</td>
                                  </tr>
                                  <tr>
                                    <td>item_6</td>
                                    <td>
                                      <span>–</span>
                                    </td>
                                    <td>
                                      <span>–</span>
                                    </td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td colspan="3">item_7</td>
                                  </tr>
                                  <tr class="compare-row">
                                    <td>item_7</td>
                                    <td>
                                      <span>–</span>
                                    </td>
                                    <td>
                                      <span>–</span>
                                    </td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td colspan="3">item_8</td>
                                  </tr>
                                  <tr>
                                    <td>item_8</td>
                                    <td>
                                      <span>–</span>
                                    </td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td colspan="3">item_9</td>
                                  </tr>
                                  <tr class="compare-row">
                                    <td>item_9</td>
                                    <td>
                                      <span>–</span>
                                    </td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                    <td>
                                      <i class="fa fa-check"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td colspan="3">item_10</td>
                                  </tr>
                                  <tr>
                                    <td>item_10</td>
                                    <td colspan="3">description_union row</td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td></td>
                                    <td>
                                      <a
                                        href="https://idc.wis.com.tw/contactUs?service=o365-email-security-solution"
                                        class="price-buy"
                                      >
                                        button
                                        <span class="hide-mobile"></span>
                                      </a>
                                    </td>
                                    <td>
                                      <a
                                        href="https://idc.wis.com.tw/contactUs?service=o365-email-security-solution"
                                        class="price-buy"
                                      >
                                        button
                                        <span class="hide-mobile"></span>
                                      </a>
                                    </td>
                                    <td>
                                      <a
                                        href="https://idc.wis.com.tw/contactUs?service=o365-email-security-solution"
                                        class="price-buy"
                                      >
                                        button
                                        <span class="hide-mobile"></span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="wizard-footer">
                    <div class="pull-right">
                      <input
                        type="button"
                        class="btn btn-next btn-fill btn-danger btn-wd"
                        name="next"
                        value="Next"
                      >
                      <input
                        type="button"
                        class="btn btn-finish btn-fill btn-danger btn-wd"
                        name="finish"
                        value="Finish"
                      >
                    </div>
                    <div class="pull-left">
                      <input
                        type="button"
                        class="btn btn-previous btn-default btn-wd"
                        name="previous"
                        value="Previous"
                      >
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      style="display:none"
      ref="modalCompleteUserProfileOpener"
      data-toggle="modal"
      data-target="#modalCompleteUserProfile"
    ></button>
  </div>
</template>
<script>
export default {
  name: "modal-complete-user-profile",
  mounted() {
    // Check if this is user's first login and show complete profile popup
    if (this.getCookie("firstLogin") == "true") {
      const modalCompleteUserProfileOpener = this.$refs
        .modalCompleteUserProfileOpener;

      this.fireCustomEvent(modalCompleteUserProfileOpener, "click");
      document.cookie = "firstLogin=false";
    }
  },
  methods: {
    getCookie: function(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    fireCustomEvent: function(el, etype) {
      if (el.fireEvent) {
        el.fireEvent("on" + etype);
      } else {
        let evObj = document.createEvent("Events");
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
      }
    }
  }
};
</script>
<style>
.comparison {
  max-width: 960px;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 30px;
  font: 13px/1.4 "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
  padding: 10px;
}
.comparison table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: auto;
}
.comparison td,
.comparison th {
  border-right: 1px solid #e8e8e8;
  empty-cells: show;
  padding: 10px;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  color: #808080;
  font-size: 15px;
}
.comparison tbody tr:nth-child(odd) {
  display: none;
}
.comparison .compare-row {
  background: #f7f7f7;
}
.fa-check {
  color: #69c7f1;
}
.comparison th {
  font-weight: normal;
  padding: 0;
  border-top: 0px solid #e8e8e8;
  border-bottom: 0px solid #e8e8e8;
}
.comparison tr td:first-child {
  text-align: left;
  padding: 15px;
  border-left: 1px solid #e8e8e8;
  border-top: 1px solid #e8e8e8;
}
.comparison .product,
.comparison .tl {
  color: #fff;
  padding: 10px;
  font-size: 14px;
}
.comparison .tl2 {
  border-right: 0;
}
.comparison .product {
  background: #69c7f1;
  height: 40px;
  font-size: 1.6em;
}
.comparison .price-info {
  padding: 15px;
}
.comparison .price-now,
.comparison .price-now span {
  color: #808080;
}
.comparison .price-now span {
  font-size: 36px;
  color: #545454;
}
.comparison .price-now p {
  font-size: 14px;
  text-align: center;
  line-height: 16px;
  display: inline;
}
.comparison .price-buy {
  background: #ec671a;
  padding: 10px 20px;
  font-size: 14px;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  border-radius: 3px;
  text-transform: uppercase;
  margin: 5px 0 10px 0;
  letter-spacing: 1px;
  cursor: pointer;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.comparison .price-buy:hover {
  background: #e84d00;
}
@media screen and (min-width: 721px) and (max-width: 1000px) {
  .table_ul li {
    letter-spacing: 0px;
  }
  .comparison .price-now span {
    font-size: 32px;
  }
  .comparison .price-now p {
    display: block;
  }
}
@media screen and (max-width: 720px) {
  .table_ul {
    padding: 0px;
  }
  .table_ul li {
    font-size: 10px;
    line-height: 16px;
    padding: 3px 0;
  }
  .comparison {
    max-width: 100%;
  }
  .comparison td:first-child,
  .comparison th:first-child {
    display: none;
  }
  .comparison tbody tr:nth-child(odd) {
    display: table-row;
    background: #f7f7f7;
  }
  .comparison .row {
    background: #fff;
  }
  .comparison td,
  .comparison th {
    border: 1px solid #ccc;
    border-top: none;
    padding: 10px;
  }
  .price-info {
    border-top: 0 !important;
    padding: 10px 0 !important;
  }
  .price-info p {
    line-height: 8px;
    font-size: 8px !important;
  }
  .comparison .compare-row {
    background: #ffffff;
  }
  .comparison .price-now p {
    display: block;
  }
  .comparison .price-now span {
    font-size: 24px;
  }
  .comparison .qbse {
    font-size: 1.2em;
  }
  .comparison td {
    font-size: 14px;
  }
  .comparison th {
    font-size: 14px;
  }
}
@media (min-width: 768px) {
  #complet_user_profile #status .col-sm-offset-1 {
    margin-left: -0.666667%;
  }
}
@media (min-width: 768px) {
  #complet_user_profile #status .col-sm-10 {
    width: 96.333333%;
  }
}
</style>
