
var imageNameA = "";
var imageNameB = "";

var imagePathA="";
var imagePathB="";

var achPhoto1="";
var achPhoto2="";

var latitude="";
var longitude="";

function getLocationInfoAch() {	
	var options = { enableHighAccuracy: false};	
	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);				
	$(".errorChk").html("Confirming location. Please wait.");
}
// onSuccess Geolocation
function onSuccess(position) {
	$("#ach_lat").val(position.coords.latitude);
	$("#ach_long").val(position.coords.longitude);
	$(".errorChk").html("Location Confirmed");
}
// onError Callback receives a PositionError object
function onError(error) {
   $("#ach_lat").val(0);
   $("#ach_long").val(0);
   $(".errorChk").html("Failed to Confirmed Location.");
}

/********************************************************************/
//---- online 
//var apipath_pmt="http://c003.cloudapp.net/banbeis/syncmobile_new/";

//--- local
var apipath_pmt="http://127.0.0.1:8000/banbeis/syncmobile_new/";
/********************************************************************/

 url ="";
$(document).ready(function(){
	if (localStorage.synced!='YES'){
			 url = "#pagesync";						
		}else{			
			url = "#homePage";
		}
	$.mobile.navigate(url);
});

function syncBasic() {
					
		var mobile=$("#mobile").val() ;
	 	var password=$("#password").val() ;
		
		/*if (mobile=="" || password==""){
			 $(".errorMsg").html("Required mobile no and password");	
		 }else{	
			 $('#syncBasic').hide();			 
			 $(".errorMsg").html("Sync in progress. Please wait...");
			if(localStorage.sync_code==undefined || localStorage.sync_code==""){
					localStorage.sync_code=0
				}*/
		
		 	//alert(apipath_pmt+'passwordCheck?cid=BANBEIS&mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code);
			//$.ajax({
//			  url:apipath_pmt+'passwordCheck?cid=BANBEIS&mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code,
//			  success: function(result) {
//				syncResult=result
//				//alert(syncResult);
//				var syncResultArray = syncResult.split('rdrd');
//					localStorage.synced=syncResultArray[0];
//					if (localStorage.synced=='YES'){	
//						localStorage.sync_code=syncResultArray[1];
//						localStorage.upazilaList=syncResultArray[2];						
//						
//						localStorage.mobile_no=mobile;
//						
//						
//						$(".errorMsg").html("Sync Successful");
//						//alert('aa');
//						
//						$('#syncBasic').show();
//						
//						/*--------------*/
//						$("input[name='agr_seqaep']:checked").val('2');
//						//$("#agr_type_con").hide();
//												
						url = "#homePage";
						$.mobile.navigate(url);
																		
					//}else{
//						
//						$(".errorMsg").html("Sync Failed. Authorization or Network Error.");
//						$('#syncBasic').show();
//					}
//				
			  }//----/success f
			//});//------/ajax
			
		// }//-----/field
			
	//}
	

function menuClick(){
		$(".errorChk").text("");
		$(".sucChk").text("");
		
		$("#btn_take_pic").show();
		$("#btn_ach_lat_long").show();
				
		url = "#homePage";
		$.mobile.navigate(url);
	
	}
//----------------back button
function backClick(){
	$(".errorChk").text("");
	}


	
//---------------------------Banbeis data page 
var unicefData1="";
var unicefData2="";
var unicefData3="";
var unicefData4="";
var unicefData5="";


function supportiveSupervision(){
	
	$("#studentQuickID").val("");
		
	/*if(localStorage.sync_code==undefined || localStorage.sync_code==""){
			$(".errorChk").text("Required Sync");
		}else{*/
			//alert(apipath+'get_div_list?cid=BANBEIS&sync_code='+localStorage.sync_code);
			$.ajax({
			  url:apipath_pmt+'get_div_list?cid=BANBEIS&sync_code='+localStorage.sync_code,
			  success: function(divStr) {
					  divNameList=divStr.split("<fd>");
					  divCmbo="";
					  for (i=0;i<divNameList.length;i++){					 
						  divCmbo+="<option value="+encodeURIComponent(divNameList[i])+">"+divNameList[i]+"</option>";					  
					  }				  
					var rpt_rep_ob=$("#s_div");
						rpt_rep_ob.empty();
						rpt_rep_ob.append(divCmbo);
						rpt_rep_ob.selectmenu("refresh");				  
					 									  
				  }		  
			});	 
			//$("#s_div").html(divCmbo);
			
			url="#page1";					
			$.mobile.navigate(url);		
		}
	
//}


function secondPage(){		
		var healthCenterName=$("#healthCenterName").val();
		var office=$("#office").val();
		var helathWorkerName=$("#helathWorkerName").val();
		var helathWorkerDeg=$("#helathWorkerDeg").val();
		var healthWorkerPhoneNo=$("#healthWorkerPhoneNo").val();
		var unionWord=$("#unionWord").val();
		var upzilaZone=$("#upzilaZone").val();
		var districtCityCor=$("#districtCityCor").val();
		var supName=$("#supName").val();
		var supWorkGround=$("#supWorkGround").val();
		var supType=$("#supType").val();
		var supDeg=$("#supDeg").val();
		var supPhoneNo=$("#supPhoneNo").val();
		var visitDate=$("#visitDate").val();
				
		if (healthCenterName==""){
			$(".errorChk").text("Required ");
		}else if (office==""){
			$(".errorChk").text("Required ");	
		}else if (helathWorkerName=="" ){
			$(".errorChk").text("Required ");	
		}else if (helathWorkerDeg==""){
			$(".errorChk").text("Required ");	
		}else if (healthWorkerPhoneNo==""){
			$(".errorChk").text("Required ");
		}else if (unionWord==""){
			$(".errorChk").text("Required ");
		}else if (upzilaZone==""){
			$(".errorChk").text("Required ");
		}else if (districtCityCor==""){
			$(".errorChk").text("Required ");	
		}else if (supName==""){
			$(".errorChk").text("Required ");	
		}else if (supWorkGround==""){
			$(".errorChk").text("Required ");	
		}else if (supType==""){
			$(".errorChk").text("Required ");	
		}else if (supDeg==""){
			$(".errorChk").text("Required ");	
		}else if (supPhoneNo==""){
			$(".errorChk").text("Required ");		
		}else if (visitDate==""){
			$(".errorChk").text("Required ");
		}else{
			
			unicefData1="&healthCenterName="+healthCenterName+"&office="+office+"&helathWorkerName="+helathWorkerName+"&helathWorkerDeg="+helathWorkerDeg+"&healthWorkerPhoneNo="+healthWorkerPhoneNo+"&unionWord="+unionWord+"&upzilaZone="+upzilaZone+"&districtCityCor="+districtCityCor+"&supName="+supName+"&supWorkGround="+supWorkGround+"&supType="+supType+"&supDeg="+supDeg+"&supPhoneNo="+supPhoneNo+"&visitDate="+visitDate
		
		
		}
		$(".errorChk").text("");
		url="#page2";					
		$.mobile.navigate(url);	
	
	}

//===================		
function thirdPage(){
	//দক্ষতা ১
	var A3S1_Q1=$("#A3S1_Q1").val();
	//দক্ষতা ২
	var A3S2_Q1=$("#A3S2_Q1").val();
	var A3S2_Q2=$("#A3S2_Q2").val();
	var A3S2_Q3=$("#A3S2_Q3").val();
	var A3S2_Q4=$("#A3S2_Q4").val();
	var A3S2_Q5=$("#A3S2_Q5").val();
	var A3S2_Q6=$("#A3S2_Q6").val();
	var A3S2_Q7=$("#A3S2_Q7").val();
	//দক্ষতা ৩
	var A3S3_Q1=$("#A3S3_Q1").val();
	var A3S3_Q2=$("#A3S3_Q2").val();
	var A3S3_Q3=$("#A3S3_Q3").val();
	//দক্ষতা ৪
	var A3S4_Q1=$("#A3S4_Q1").val();
	var A3S4_Q2=$("#A3S4_Q2").val();
	var A3S4_Q3=$("#A3S4_Q3").val();
	var A3S4_Q4=$("#A3S4_Q4").val();
	var A3S4_Q5=$("#A3S4_Q5").val();
	var A3S4_Q6=$("#A3S4_Q6").val();
	
	unicefData2="&A3S1_Q1="+A3S1_Q1+"&A3S2_Q1="+A3S2_Q1+"&A3S2_Q2="+A3S2_Q2+"&A3S2_Q3="+A3S2_Q3+"&A3S2_Q4="+A3S2_Q4+"&A3S2_Q5="+A3S2_Q5+"&A3S2_Q6="+A3S2_Q6+"&A3S2_Q7="+A3S2_Q7+"&A3S3_Q1="+A3S3_Q1+"&A3S3_Q2="+A3S3_Q2+"&A3S3_Q3="+A3S3_Q3+"&A3S4_Q1="+A3S4_Q1+"&A3S4_Q2="+A3S4_Q2+"&A3S4_Q3="+A3S4_Q3+"&A3S4_Q4="+A3S4_Q4+"&A3S4_Q5="+A3S4_Q5+"&A3S4_Q6="+A3S4_Q6
		
							
	url="#page3"
	$.mobile.navigate(url);	
				
	};	
	
function fourPage(){
	//দক্ষতা ৫
	var A3S5_Q1=$("#A3S5_Q1").val();
	var A3S5_Q2=$("#A3S5_Q2").val();
	var A3S5_Q3=$("#A3S5_Q3").val();
	var A3S5_Q4=$("#A3S5_Q4").val();
	//দক্ষতা ৬
	var A3S6_Q1=$("#A3S6_Q1").val();
	var A3S6_Q2=$("#A3S6_Q2").val();
	var A3S6_Q3=$("#A3S6_Q3").val();
	var A3S6_Q4=$("#A3S6_Q4").val();
	//সাপোর্টিভ সুপারভিশন পদ্ধতি ৩ খ: GMP বিষয়ে সাপোর্টিভ সুপারভিশন/মেনটরিং চেকলিস্ট
	//দক্ষতা ১
	var B3S1_Q1=$("#B3S1_Q1").val();
	//দক্ষতা ২
	var B3S2_Q1=$("#B3S2_Q1").val();
	var B3S2_Q2=$("#B3S2_Q2").val();		
	var B3S2_Q3=$("#B3S2_Q3").val();
	var B3S2_Q4=$("#B3S2_Q4").val();
	var B3S2_Q5=$("#B3S2_Q5").val();
	var B3S2_Q6=$("#B3S2_Q6").val();
	var B3S2_Q7=$("#B3S2_Q7").val();
	var B3S2_Q8=$("#B3S2_Q8").val();
	var B3S2_Q9=$("#B3S2_Q9").val();
	var B3S2_Q10=$("#B3S2_Q10").val();
	var B3S2_Q11=$("#B3S2_Q11").val();
	var B3S2_Q12=$("#B3S2_Q12").val();
	var B3S2_Q13=$("#B3S2_Q13").val();
	var B3S2_Q14=$("#B3S2_Q14").val();
	var B3S2_Q15=$("#B3S2_Q15").val();
	var B3S2_Q16=$("#B3S2_Q16").val();
	var B3S2_Q17=$("#B3S2_Q17").val();
	var B3S2_Q18=$("#B3S2_Q18").val();
	var B3S2_Q19=$("#B3S2_Q19").val();
	var B3S2_Q20=$("#B3S2_Q20").val();
	
	unicefData3="&A3S5_Q1="+A3S5_Q1+"&A3S5_Q2="+A3S5_Q2+"&A3S5_Q3="+A3S5_Q3+"&A3S5_Q4="+A3S5_Q4+"&A3S6_Q1="+A3S6_Q1+"&A3S6_Q2="+A3S6_Q2+"&A3S6_Q3="+A3S6_Q3+"&A3S6_Q4="+A3S6_Q4+"&B3S1_Q1="+B3S1_Q1+"&B3S2_Q2="+B3S2_Q2+"&B3S2_Q3="+B3S2_Q3+"&B3S2_Q4="+B3S2_Q4+"&B3S2_Q5="+B3S2_Q5+"&B3S2_Q6="+B3S2_Q6+"&B3S2_Q7="+B3S2_Q7+"&B3S2_Q8="+B3S2_Q8+"&B3S2_Q9="+B3S2_Q9+"&B3S2_Q10="+B3S2_Q10+"&B3S2_Q11="+B3S2_Q11+"&B3S2_Q12="+B3S2_Q12+"&B3S2_Q13="+B3S2_Q13+"&B3S2_Q14="+B3S2_Q14+"&B3S2_Q15="+B3S2_Q15+"&B3S2_Q16="+B3S2_Q16+"&B3S2_Q17="+B3S2_Q17+"&B3S2_Q18="+B3S2_Q18+"&B3S2_Q19="+B3S2_Q19+"&B3S2_Q20="+B3S2_Q20;
	
						
	url="#page4"
	$.mobile.navigate(url);	
				
	};
	
function fivePage(){
	var B3S2_Q21=$("#B3S2_Q21").val();
	var B3S2_Q22=$("#B3S2_Q22").val();
	var B3S2_Q23=$("#B3S2_Q23").val();
	var B3S2_Q24=$("#B3S2_Q24").val();
	var B3S2_Q25=$("#B3S2_Q25").val();
	var B3S2_Q26=$("#B3S2_Q26").val();
	var B3S2_Q27=$("#B3S2_Q27").val();
	var B3S2_Q28=$("#B3S2_Q28").val();
	var B3S2_Q29=$("#B3S2_Q29").val();
	var B3S2_Q30=$("#B3S2_Q30").val();
	var B3S2_Q31=$("#B3S2_Q31").val();
	var B3S2_Q32=$("#B3S2_Q32").val();
	var B3S2_Q33=$("#B3S2_Q33").val();
	var B3S2_Q34=$("#B3S2_Q34").val();
	var B3S2_Q35=$("#B3S2_Q35").val();
	var B3S2_Q36=$("#B3S2_Q36").val();
	var B3S2_Q37=$("#B3S2_Q37").val();
	var B3S2_Q38=$("#B3S2_Q38").val();
	var B3S2_Q39=$("#B3S2_Q39").val();
	var B3S2_Q40=$("#B3S2_Q40").val();
	var B3S2_Q41=$("#B3S2_Q41").val();
	var B3S2_Q42=$("#B3S2_Q42").val();
	var B3S2_Q43=$("#B3S2_Q43").val();
	var B3S2_Q44=$("#B3S2_Q44").val();
	var B3S2_Q45=$("#B3S2_Q45").val();
	var B3S2_Q46=$("#B3S2_Q46").val();
	var B3S2_Q47=$("#B3S2_Q47").val();
	var B3S2_Q48=$("#B3S2_Q48").val();
	var B3S2_Q49=$("#B3S2_Q49").val();
	
	unicefData4="&B3S2_Q21="+B3S2_Q21+"&B3S2_Q22="+B3S2_Q22+"&B3S2_Q23="+B3S2_Q23+"&B3S2_Q24="+B3S2_Q24+"&B3S2_Q25="+B3S2_Q25+"&B3S2_Q26="+B3S2_Q26+"&B3S2_Q27="+B3S2_Q27+"&B3S2_Q28="+B3S2_Q28+"&B3S2_Q29="+B3S2_Q29+"&B3S2_Q30="+B3S2_Q30+"&B3S2_Q31="+B3S2_Q31+"&B3S2_Q32="+B3S2_Q32+"&B3S2_Q33="+B3S2_Q33+"&B3S2_Q34="+B3S2_Q34+"&B3S2_Q35="+B3S2_Q35+"&B3S2_Q36="+B3S2_Q36+"&B3S2_Q37="+B3S2_Q37+"&B3S2_Q38="+B3S2_Q38+"&B3S2_Q39="+B3S2_Q39+"&B3S2_Q40="+B3S2_Q40+"&B3S2_Q41="+B3S2_Q41+"&B3S2_Q42="+B3S2_Q42+"&B3S2_Q43="+B3S2_Q43+"&B3S2_Q44="+B3S2_Q44+"&B3S2_Q45="+B3S2_Q45+"&B3S2_Q46="+B3S2_Q46+"&B3S2_Q47="+B3S2_Q47+"&B3S2_Q48="+B3S2_Q48+"&B3S2_Q49="+B3S2_Q49
	
							
	url="#page5"
	$.mobile.navigate(url);	
				
	};	
	
function sixPage(){
	//মুয়াক পরিমাপ: মুয়াক পরিমাপ করেছেন কিনা
	/*var B3S2_Q50=$("#B3S2_Q50").val();
	var B3S2_Q51=$("#B3S2_Q51").val();
	var B3S2_Q52=$("#B3S2_Q52").val();
	var B3S2_Q53=$("#B3S2_Q53").val();
	var B3S2_Q54=$("#B3S2_Q54").val();
	var B3S2_Q55=$("#B3S2_Q55").val();
	var B3S2_Q56=$("#B3S2_Q56").val();
	var B3S2_Q57=$("#B3S2_Q57").val();
	var B3S2_Q58=$("#B3S2_Q58").val();
	var B3S2_Q59=$("#B3S2_Q59").val();
	var B3S2_Q60=$("#B3S2_Q60").val();
	var B3S2_Q61=$("#B3S2_Q61").val();
	var B3S2_Q59=$("#B3S2_Q59").val();
	var B3S2_Q62=$("#B3S2_Q62").val();
	//দক্ষতা ৩
	var B3S3_Q1=$("#B3S3_Q1").val();
	var B3S3_Q2=$("#B3S3_Q2").val();
	var B3S3_Q3=$("#B3S3_Q3").val();
	var B3S3_Q4=$("#B3S3_Q4").val();
	var B3S3_Q5=$("#B3S3_Q5").val();
	var B3S3_Q6=$("#B3S3_Q6").val();
	var B3S3_Q7=$("#B3S3_Q7").val();
	var B3S3_Q8=$("#B3S3_Q8").val();
	var B3S3_Q9=$("#B3S3_Q9").val();
	//দক্ষতা ৪
	var B3S4_Q1=$("#B3S4_Q1").val();
	var B3S4_Q2=$("#B3S4_Q2").val();
	var B3S4_Q3=$("#B3S4_Q3").val();
	var B3S4_Q4=$("#B3S4_Q4").val();
	var B3S4_Q5=$("#B3S4_Q5").val();
	var B3S4_Q6=$("#B3S4_Q6").val();*/
	
	
	
						
	url="#page6"
	$.mobile.navigate(url);	
				
	};	
	
function sevenPage(){
						
	url="#page7"
	$.mobile.navigate(url);	
				
	};	
	
function eightPage(){
						
	url="#page8"
	$.mobile.navigate(url);	
				
	};
	
function ninePage(){
						
	url="#inPhoto"
	$.mobile.navigate(url);	
				
	};			



function SubmitData(){
		$("#btn_submit").hide();
		
		var d = new Date();	
		var get_time_pmt=d.getTime();	
		
		latitude=$("#ach_lat").val();
		longitude=$("#ach_long").val();
		
		achPhoto1=$("#achPhoto1").val();
		achPhoto2=$("#achPhoto2").val();
		
		if (latitude==undefined || latitude==''){
			latitude=0;
			}
		if (longitude==undefined || longitude==''){
			longitude=0;
			}
		//---------------
		if (achPhoto1=='' || achPhoto1==undefined){
			//$(".errorChk").text("Please confirm Photo 1 ");
			$("#btn_submit").show();
		}else{
			if (achPhoto2=='' || achPhoto2==undefined){
				//$(".errorChk").text("Please confirm Photo 2 ");
				$("#btn_submit").show();
			}else{					
				//imagePathA="test"					
				if (imagePathA!=""){							
					$(".errorChk").text("Syncing photo 1..");
					imageNameA = localStorage.mobile_no+"_"+get_time_pmt+".jpg";										
					uploadPhotoAch(imagePathA, imageNameA);	
					//$("#btn_submit").show();					
				}
				
			}//Photo 2
		}//chk photo
		
	//syncData();
		
	}

//------------------------image 1
function getAchivementImageA() {
	navigator.camera.getPicture(onSuccessA, onFailA, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true});		
}

function onSuccessA(imageURI) {		
    var image = document.getElementById('myImageA');
    image.src = imageURI;
	imagePathA = imageURI;	
	$("#achPhoto1").val(imagePathA);
	
}

function onFailA(message) {
	imagePathA="";
    alert('Failed because: ' + message);
}


function uploadPhotoAch(imageURI, imageNameA) { 	

	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageNameA;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://e4.businesssolutionapps.com/mrepimage/banbeis_upload/fileUploader/"),winAchInfo2,onfail2,options);
	
}

function winAchInfo2(r) {	
	$(".errorChk").text('Image 1 upload Successful. Syncing image 2...');
	
	var d = new Date();	
	var get_time_pmt=d.getTime();
		
	//imagePathB="test2"
	if (imagePathB!=""){							
		$(".errorChk").text("Syncing photo 2..");
		imageNameB = localStorage.mobile_no+"_"+get_time_pmt+".jpg";
				
		uploadPhoto2Ach(imagePathB, imageNameB);
		//$("#btn_submit").show();		
	}
}

function onfail2(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_submit").show();
}

//-----------------------image 2
function getAchivementImageB() { 
	navigator.camera.getPicture(onSuccessB, onFailB, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccessB(imageURI) {	
    var image = document.getElementById('myImageB');
    image.src = imageURI;
	imagePathB = imageURI;	
	$("#achPhoto2").val(imagePathB);
	
}

function onFailB(message) { 
	imagePathB="";
    alert('Failed because: ' + message);
}


function uploadPhoto2Ach(imageURI, imagePathB) { // second step
	
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageNameB;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://e4.businesssolutionapps.com/mrepimage/banbeis_upload/fileUploader/"),winComInfoC,onfailC,options);
	
}

function winComInfoC(r) {
	$(".errorChk").text('Image 2 upload successfull. Syncing Data ...');
	syncData();
}





function syncData(){	
			$(".sucChk").text('Successfully Submitted');
			
			setTimeout(function(){
				window.location.reload(1);	
			},5000);
			
			/*$.ajax({
					type: 'POST',
					url:apipath_pmt+"submitData_pmt?cid=BANBEIS&mobile_no="+localStorage.mobile_no+"&syncCode="+localStorage.sync_code+'&pmt_achPhoto='+imageNamePmt+'&pmt_achPhoto2='+imageName2Pmt+'&latitude='+pmt_latitude+'&longitude='+pmt_longitude+"&boothNo="+boothNo+"&app_serial_no="+app_serial_no+"&division_name="+division_name+"&zila_name="+zila_name+"&upazila_name="+upazila_name+"&union_name="+union_name+"&pou_name="+encodeURIComponent(pou_name)+'&tempText='+ encodeURIComponent(banbeisDataSearch)+encodeURIComponent(banbeisData)+encodeURIComponent(banbeisDataPage2)+encodeURIComponent(banbeisDataPage3),
					
					
					   success: function(result) {
						   if(result=='Success'){							
							//alert(result)
							//--------------
							 $("#edu_year").val(0);
							 $("#s_div").val("");
							 $("#s_dist").val("");
							 $("#s_up").val("");							
							
							//--------------
							
							$("#pmt_ach_lat").val(0);
							$("#pmt_ach_long").val(0);
							$("#pmt_achPhoto").val("");										
							$("#pmt_achPhoto_2").val("");	
							
							$(".sucChk").text('Successfully Submitted');
							$(".errorChk").text("");
							$("#btn_submit").show();						
						}else{
							$(".errorChk").text('Unauthorized Access');																	
							$("#btn_submit").show();
							}
							
					   }//end result
			});//end ajax*/
	
	}

