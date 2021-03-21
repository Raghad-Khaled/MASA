<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';



 // if(isset($_POST['Nsubmit'])){   
    if(true){      
        $modelnum=$_POST['modelnum'];
        $name=$_POST['name'];
        $custmername=$_POST['custmername'];
        $phone1=$_POST['tel1'];
        $phone2=$_POST['tel2'];
        $city=$_POST['city'];
        $block=$_POST['block'];
        $street=$_POST['street'];
        $flatnum=$_POST['flatnum'];
        $payment=$_POST['payment'];
        $ordertype=$_POST['ordertype'];
        
        if(isset($_POST["shap"])){
            $shap=$_POST["shap"];
        }
        else{
            $shap="لم يتم تحديده";
        }

        if(isset($_POST["shap2"])){
            $shap2=$_POST["shap2"];
        }
        else{
            $shap2="لم يتم تحديده";
        }



        $mail = new PHPMailer(true);
        //$mailer->CharSet = 'UTF-8';


        try{
         
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
       //$mail->SMTPSrcure='tls';       
      // $mail->SMTPSecure = 'ssl';
       $mail->isSMTP(); 
       $mail->Username   = 'masashop@masagold.com';                     // SMTP username
       $mail->Password   = 'masa2225853';                               // SMTP password
      // $mail->Mailer="smtp";                                            // Send using SMTP
       //$mail->Host       = 'mail.masagold.com';                    // Set the SMTP server to send through
       $mail->Host       = 'gator2009.hostgator.com';                    // Set the SMTP server to send through
       $mail->SMTPSecure = 'ssl';
       $mail->SMTPAuth   = true;  
      ////
       $mail->SMTPSecure  =false;
       $mail->Port=26;

       //$mail->isSMTP();
       //$mail->SMTPDebug  = 2; 
       // $mail->Host = 'localhost';
      // $mail->SMTPAuth = false;
       //$mail->SMTPAutoTLS = false; 
       //$mail->Port = 465;

                                         // Enable SMTP authentication
       
        
        //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        //$mail->Port       = 465;    


        $mail->setFrom('masashop@masagold.com', 'MASA');
        //$mail->From = "jesse@example.com";
        //$mail->FromName = "Jesse Elser | Jolly Roger PCS Owner/Operator";
        //$mail->AddReplyTo("jesse@example.com", "Jesse Elser | Jolly Roger PCS Owner/Operator");
        $mail->Subject ="New order";
        $mail->addAddress('raghad200059@gmail.com');  
        //masagoldpro@gmail.com
        //raghad200059@gmail.com
        $mail->IsHTML(true);  // set email format to HTML

       
        if($_POST["name2"] !=""){
            $modelnum2=$_POST['modelnum2'];
            $name2=$_POST['name2'];
            $ordertype2=$_POST['ordertype2'];

            

            $mail->Body ='<!DOCTYPE HTML>
            <body text-align: center; style="color:black; background-color: #fae3f0; border-radius: 20px; font-family: sans-serif; padding: 40px 0px;  ">
                <div id="container" style="width: 80%; margin: 0 auto; text-align: right;;">
                    <h4> لديك طلب جديد <h4> <br>
                    <p> العميل '.$custmername.' ارسل اليك طلب
                    <br>'.$modelnum.' يريد الموديل رقم  <br> باسم '.$name.' 
                    <br> نوعها '.$ordertype.' <br>
                    شكلها '.$shap.' <br>

                    <br>'.$modelnum2.' وكذلك يريد الموديل رقم  <br> باسم '.$name2.' 
                    <br> نوعها '.$ordertype2.' <br>
                    شكلها '.$shap2.' <br>

                    طريقة الدفع '.$payment.'<br>
                    ارقام التواصل <br>
                    '.$phone1.' & '.$phone2.' <br>
                    عنوان التوصيل '.$flatnum.' '.$street.'  '.$block.'  '.$city
                    .'
                      </p>
                        
                    <h4>بالتوفيق </h4>
                </div>
            </body>';




        }
        else {
        $mail->Body ='<!DOCTYPE HTML>
            <body text-align: center; style="color:black; background-color: #fae3f0; border-radius: 20px; font-family: sans-serif; padding: 40px 0px;  ">
                <div id="container" style="width: 80%; margin: 0 auto; text-align: right;;">
                    <h4> لديك طلب جديد <h4> <br>
                    <p> العميل '.$custmername.' ارسل اليك طلب
                    <br>'.$modelnum.' يريد الموديل رقم  <br> باسم '.$name.' 
                    <br> نوعها '.$ordertype.' <br>
                    شكلها '.$shap.' <br>
                    طريقة الدفع '.$payment.'<br>
                    ارقام التواصل <br>
                    '.$phone1.' & '.$phone2.' <br>
                    عنوان التوصيل '.$flatnum.' '.$street.'  '.$block.'  '.$city
                    .'
                      </p>
                        
                    <h4>بالتوفيق </h4>
                </div>
            </body>';


        }
        if($name !="" && $payment!=""){
        $mail->send();
    }
      //   echo 'Message has been sent';
     } catch (Exception $e) {
     // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
     }

     header("Location:index.html");
     //echo "<script>window.location.assign('index.html')</script>";
     //exit();

    }
    
//https://gator2009.hostgator.com:2083/
?>
    