import React, { Key, useEffect, useState } from "react";
import styles from "./BodyHome.module.scss";
import { Button } from "../../../component";

export type BodyHomeProps = {
  className?: string;
  style?: any;
};

export const BodyHome = (BodyHomeProps: BodyHomeProps) => {
  const Data = [
    {
      image:
        "https://tripipartner.vn/static/media/ic_home_desktop_revenue_increase.15dcb41e.svg",
      value: "20%",
      subdata: "Biên lợi nhuận tăng",
    },
    {
      image:
        "https://tripipartner.vn/static/media/ic_home_desktop_revenue.579788ef.svg",
      value: "25.0000.000đ",
      subdata: "Doanh thu tiềm năng hàng tháng",
    },
    {
      image:
        "https://tripipartner.vn/static/media/ic_home_desktop_partner.8bcdcfd3.svg",
      value: "50.000",
      subdata: "Đối tác khắp cả nước",
    },
    {
      image:
        "https://tripipartner.vn/static/media/ic_home_desktop_flight.798e05b8.svg",
      value: "8.500",
      subdata: "Chuyến bay",
    },
    {
      image:
        "https://tripipartner.vn/static/media/ic_home_desktop_tour_activity.d7e1a25a.svg",
      value: "1.530",
      subdata: "Tour và hoạt động",
    },
    {
      image:
        "https://tripipartner.vn/static/media/ic_home_desktop_hotel.11f63016.svg",
      value: "78.000",
      subdata: "Khách sạn",
    },
  ];

  const ImageBanner = [
    {
      image:
        "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FMZY3EDBIKR_%2Ftmp%2Fplaytemp6047801723132455615%2FmultipartBody2858985273188265786asTemporaryFile?generation=1700548739875377&alt=media",
      link: "#",
    },
    {
      image:
        "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FYJWRFZHT95_%2Ftmp%2Fplaytemp8045686115915114583%2FmultipartBody1180973208259894894asTemporaryFile?generation=1702549341588397&alt=media",
      link: "#",
    },
    {
      image:
        "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2F5T11RA9G6P_%2Ftmp%2Fplaytemp8045686115915114583%2FmultipartBody6533778329331989289asTemporaryFile?generation=1702869024672204&alt=media",
      link: "#",
    },
    {
      image:
        "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2F6LL010MNY9_%2Ftmp%2Fplaytemp5537990395138644387%2FmultipartBody4791606623188355091asTemporaryFile?generation=1698717755628615&alt=media",
      link: "#",
    },
    {
      image:
        "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FRLQR53KP02_%2Ftmp%2Fplaytemp6047801723132455615%2FmultipartBody7478112897507103355asTemporaryFile?generation=1700189104472333&alt=media",
      link: "#",
    },
    {
      image:
        "https://googleapis.tripi.vn/download/storage/v1/b/tourcdn/o/photos%2FTMC7JWU8X8_%2Ftmp%2Fplaytemp3020482904416490993%2FmultipartBody1623442798759456224asTemporaryFile?generation=1628050684740503&alt=media",
      link: "#",
    },
    {
      image:
        "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FIDESFHBI0S_%2Ftmp%2Fplaytemp1967386972110067927%2FmultipartBody8210035283040075842asTemporaryFile?generation=1701915564645829&alt=media",
      link: "#",
    },
  ];

  const BodyHome = [
    {
      Title: "Giải pháp kinh doanh du lịch thông minh",
      styles: "container row",
      Children: [
        {
          col: "col-6",
          content: (
            <div className={[, styles.Docs].join(" ")}>
              <div
                className={[
                  "row align-center justify-center",
                  styles.contentDocsLeft,
                ].join(" ")}
              >
                Tripi Partner tự hào kết nối, đồng hành và phát triển với
                50.000+ đại lý, cộng tác viên du lịch trên khắp cả nước. Chúng
                tôi cam kết mang lại chính sách chiết khấu và ưu đãi kích cầu
                thường xuyên, hấp dẫn nhằm đảm bảo lợi nhuận hàng tháng, giúp
                Đối tác yên tâm hợp tác cùng Tripi Partner. Bên cạnh đó, đội ngũ
                trên 150+ chuyên viên hỗ trợ giàu kinh nghiệm, nhiệt tình, luôn
                sẵn sàng giải đáp thắc mắc của Quý đối tác nhanh chóng và chính
                xác nhất.
              </div>
              <Button
                className={[
                  "align-center justify-center",
                  styles.buttonDocs,
                ].join(" ")}
                color="fill"
                children={"Trở thành partner"}
              />
            </div>
          ),
        },
        {
          col: "col-6",
          content: (
            <div
              className={["row align-center justify-center", styles.Docs].join(
                " "
              )}
            >
              <iframe
                className={[, styles.Video].join(" ")}
                src="https://youtube.com/embed/dpFM89ZLCfA"
              ></iframe>
            </div>
          ),
        },
      ],
    },
    {
      styles: "container row",
      Children: [
        {
          col: "row",
          content:
            Data &&
            Data.map((lg: any, k: Key) => {
              return (
                <div
                  className={[
                    "col-4 row align-center justify-center",
                    styles.data,
                  ].join(" ")}
                  key={k}
                >
                  <img
                    className={["col-3", styles.dataImage].join(" ")}
                    src={lg.image}
                  />
                  <div className={["col-9", styles.dataContent].join(" ")}>
                    <div className={["row", styles.dataValue].join(" ")}>
                      {lg.value}
                    </div>
                    <div className={["row", styles.dataSub].join(" ")}>
                      {lg.subdata}
                    </div>
                  </div>
                </div>
              );
            }),
        },
      ],
    },
    {
      styles: "row",
      backgroundImage: "",
      Children: [
        {
          col: "col-6",
          content: (
            <img
              className={[styles.Image].join(" ")}
              src="https://gcs.tripi.vn/phms-dev/photo/img/2684cH/rectangle-14.1.png"
            />
          ),
        },
        {
          col: "col-6",
          content: (
            <div
              className={[, styles.Docs].join(" ")}
              style={{ backgroundColor: "rgb(233, 252, 238)" }}
            >
              <div
                className={[
                  "row align-center justify-center",
                  styles.TitleDocs,
                ].join(" ")}
              >
                MỤC TIÊU CỦA CHÚNG TÔI
              </div>
              <div
                className={[
                  "row align-center justify-center",
                  styles.contentDocsRight,
                ].join(" ")}
              >
                Mục tiêu của chúng tôi đó là “Delivering Happiness” - Mang lại
                niềm vui cho Đối tác và Khách hàng. Mở rộng và phát triển Tripi
                Partner tạo nên cộng đồng Đối tác vững mạnh cùng phát triển.
                Giúp đỡ Đối tác làm chủ việc kinh doanh và nắm bắt mọi cơ hội
                kinh doanh các sản phẩm du lịch.
              </div>
            </div>
          ),
        },
      ],
    },
    {
      styles: "container row",
      Children: [
        {
          col: "col-6",
          content: (
            <div className={[, styles.Docs].join(" ")}>
              <div
                className={[
                  "row align-center justify-center",
                  styles.TitleDocs,
                ].join(" ")}
              >
                KẾT NỐI 20.000+ NHÀ CUNG CẤP
              </div>
              <div
                className={[
                  "row align-center justify-center",
                  styles.contentDocsRight,
                ].join(" ")}
              >
                Tripi mong muốn mang đến cơ hội kinh doanh và tăng thêm doanh
                thu cho tất cả các đối tác cung ứng với đội ngũ bán hàng giàu
                kinh nghiệm.
              </div>
            </div>
          ),
        },
        {
          col: "col-6",
          content: (
            <img
              className={[, styles.Image].join(" ")}
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyUAAAG3CAYAAACqpfr+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAABhaVRYdFNuaXBNZXRhZGF0YQAAAAAAeyJjbGlwUG9pbnRzIjpbeyJ4IjowLCJ5IjowfSx7IngiOjgwNSwieSI6MH0seyJ4Ijo4MDUsInkiOjQ0MH0seyJ4IjowLCJ5Ijo0NDB9XX0moMT1AACCKklEQVR4Xu3dB4AkZZn/8Wd3Zmd3ZnPOCZawu+QcXYIKSlAQFBOIihER78x6Ap7+zXcGzIGgp4gokswSVFDJcVnCAptzzvlfv7frnXmnpqrT9EzN7H4/Xl13dVd4u0fk/fXzvlU9dkUMAAAAAHLSM34EAAAAgFwQSgAAAADkilACAAAAIFeEEgAAAAC5IpQAAAAAyBWhBAAAAECuCCUAAAAAckUoAQAAAJArQgkAAACAXBFKAAAAAOSKUAIAAAAgV4QSAAAAALkilAAAAADIFaEEAAAAQK4IJQAAAAByRSgBAAAAkCtCCQAAAIBcEUoAAAAA5IpQAgAAACBXhBIAAAAAuSKUAAAAAMgVoQQAAABArgglAAAAAHJFKAEAAACQK0IJAAAAgFwRSgAAAADkilACAAAAIFeEEgAAAAC5IpQAAAAAyBWhBAAAAECuCCUAAAAAckUoAQAAAJArQknOlj36RZvzhzNt2/q58Svl0T7aFwAAAOjuCCVdwIbF/7CF/3hf2cFEgUT7AAAAALsDQknOBk15k3tUyFj9/M/d82LCQDL8kI+7RwAAAKA7I5R0IRqOVawCovfC9ysd8gUAAAB0RYSSnG1NBItiw7hUJQkl9wUAAAC6I0JJzjYmKiMKJGnDuNImta8pY7gXAAAA0NX12BWJn6OTKYA8d9NB8VqLXv0m2KTTb3eP3sxrB8XPWtvnvMdbbQcAAKpz66wbbVjTcDtuwsl239y77JkVM23FxqXxu2YXH/p+G9o0Il4DUEtUSnKUNbFdYSWcO1Ls0r/F5qAAAIDinln+lH313ivsklvOs9ueudGWb1zmXr9v3t2FYBK97xcAHYdQkqNiV9tKDuvKwhAuAACqozCipdzAQZUE6DiEkpyoGpI1oV3C90pVSoodBwAAtJUVRlZsKlRKkoYRSIAOxZySdlClI1nR0PyOplEnWEM8zyNrvoeCRrGwIZovImnzTkK6X0mxe5b44WDJIKS2afH3SgE6w5Zbf2PbH7rfdi6c79YbzjrXep99rnuet20P/tu23nZzc9t6jhlnfa8q/s8pgO6nWHVE80k0dyS5zVn7vd7O3v/18RqAWiOUtIPCQrEqhe/wa0mGk6yJ66FyQ0nfKARNPP32eK1A7VLoKaeSMu1tq+NnQMdRh3/DFR9v7vB7/X/4M+t1xNHxWn7WXfIW18aQQsmgO+6K1wB0d5q0fs0j3y46XMuHkk/8+X22PJjk/uHjr7L9hk2P1wDUGsO32kGhQRWKrGqIDwYKFaqq+HBQKiSEyrkXSTJ46FzJc6YZc8J3CCToNOr0JwOJdIVAoupNMpBI77POiZ8B2B3cO/fusuePJBFIgI5FKGknhZJyhj/ppojFJrbXikKQzlWKKisM20Jn2blwQfysNVUiuoK0sCRdpX0A2kcVErdkzBcphfkkQMcjlNRAucHEzyPpiDux65iqmOj4pWi4lxagGgoYqiqoupBVYUjakdHpr3UlIq1tWYEopDkuabrKXJdi/Get9DMDexIN2WqPY8efFD8D0FGYU1IjCgRz/nBmvJZNYWBgFGDKqWZoeJjCRjnHVeVDxyxnaBg3XOw+NAcjrdM/4Ic/s55jxsZr6bL21cTtbff93bb+5Q/xKy2a3vdBazj9rHithTq5W279tW36/rfiV1pTRUEBo/E9l8WvtLbpe98suq80vvsDzSFAQ712pHSss+Z36HNqgrramEbn0OfOGiq28tB94methZWSSueWZH3/Wd/T5ut/ZJtvuiFea9HnjRe6xVPwUIgqhI/0sNf3qi91i0AFdAY/Yf2Lr/iO3frMr9y9R4rxc0p03xKP+SRAx6NSUiMKG+V09BVeOoKuAlZOIFEbCSTdhzqdaUsp6rCqg57cry4KMuqY73jqCds5b06bpW7agfERWqgTvPqMkzJDhejYen/1GSdHz9uGiaxKhITt83yHO1zSAoXOpQCjJSuQiPbXNgpHScWqCv7clSpULdp+/8WOtT3jb1I/vfA3UTv1/W644mPNx07jAiKBBHAquQeJF97B3SOQAB2PUFJDxS7LGyp3orvCg7+0cK2U20Z0DfWHHxU/ay1rOJSnqkGaPu/+gHvcPrNwZbdQj8FDrG7CpHitQB15dYLLpY5yWnhJqxgk1cehQx36chQ66SeVdWxvS/S9JLcvFma8tEBUTCXfmbd95hPxs1APq4+Dov7mxUKNV2lbgd1VWiAZ2jg8fla+7j6f5KXlm+zavy+wK29+vnnR+t2zVsZblFbNfsnzlUNtzWqvXq+Etldbk8eq5HN7/lhpx/PH9Eua5P6lPku4fTm0fdguPe+OGL5VY6UuEyyaf1Jq0rsCSXhJ4FofE91D1rCnYpfR9Z31JG2v/XbMfs7WnPfq+NUWvU6YYf2/9aN4Lf3cfphW77Nf59bVoS/Vvqz2hHRcPzxKw57SgkI4JEnHVMc/GTDC9qkTn3YJ4vBcUunQslIU5IoFJbUtee+TnSuW2+qXHxuvtaiffpAN+Fnhu8hqp9qo71qfU0Peig2jA0p5aekau/vJeTZpxEC3ftIB491je/hj6lj+uB0tLZBo+JauvnXbMzfGr6RTVUTDtfzwre54fxJ1TO+Ztapkp3bSsEa74rV729tOzB4OrA7uxT96Ml4ruOadBxTd5+QvPNDm3LuuOy1+1pbae90/FhbtrKutrr3n7G0n7T8kfrWttHMn+WNddMKYop9D9Nkr6eTruC9+7WXxWoE+31W/nR2vVf793fWJI1M/s74vbZv1vaktJ00d4j5nse+sqyCU1Fg5c0tKBQi9r3knfjK6jrk8niCfFU60bamhYZp3wgT37kVVg7Rf3YvNGcjq1PugkHXMxnddao3v/aB7rk61OtdJyTCUFQ7Uifcd48zzBduECkPA2lYEBt1xd9QBL/yPeFrHX+1S+0JZn2PII8/Fz7JDRLhNubLOF0oLJdv+dpet++C74rUWfV7/Zmv6xJXueS3b2V1decN9dt2dpYfiTBoxwHV+r7jg2Io6wRd/8w+u86xOtDrQV1xwXFmd8mvvfNKuuuGf8VptXHPZ6W3OXe7nF+170SnTy2q/PvNV0bH1mOS/Px3ryuj7KIe+D7XzpaVr3XcZ0vH099F36/9OtZY1ZKuSUKI5JR//c2HuZ3ecT1JOxzxUrJOcFkrSOt6hHhf9MX7WQttrvzS1aq8655P/82/xWnnUJnX6s9rWlUNJ2vecRufSObs6hm/VmDr95QyRSpvXode0r4KHgo1usKjFhxyFlaz9dBf5YnRcAkn3U2oye5q0QKIOuxbZkTpMSL/Kt8wn2VxmdUbt89WEUDiHpJwhR6Gs7f13oY55snOuNiQDidSltE3C/dM6+mmfqRxp31tS2udLH7oVtX9ay79EatnO7kodZ3VySy3qXKtjfPKnb3Qd+XKc/Olfun20v+gYCil+PYve99vVcklT7ufXUvj8vyz6+bWdttGSFkjEH0/nnvyuH7rnWfzxwnCXpNf0XuG8NxY9XjX8jRFrOeRqT5hPEnaYk9J+hddrWSEiqwOf9Wu+zNh/cPysPMXam6TOvDrlviKU7NyrXQoB5VLo8McLF39sVSY6g4JOktrm2hAtYciasV9l329eCCUdQAEgLTx4qmikzRVRaNAlfdMqHnpN76UFC4WVYpcC9mEH3U9Wpzqr4542kVv8XBLRhOo0fpJ7Wqdfv+4nA4nXc/SY+Fm6rEnuaVWStI63+OFikjZfJll58EqFOlV60mR91mL03SfbX+5xsv4mGr4lWe3UhQv2VPqFXVWAtMVTh1e/2Gd1uD29n7aN9q91BaRayc57oeJQWPSZw/VQVgVEFArC97Tv2045wFUxtOh5SG1I7uPpPYWW5Hvh8Xw7Pb9P8rNV69ZZNzZfWWtoU9u5I0OrCCrddT6Jhjipo6xf2DVsKrnovVCxwDBnxeb4WWtX3ZweDCoJDJ468pW2t1ibPXXOdUxVCa48Z4p71HqykqFjJatBWa655IDm44WLP3ZnVSSS37M+kxa1wX9GLfruOisotRehpINMOv32zGCiSogqG8WCS63oHMwj2XNoIneSOsbNneMdO1J/le85drz1HFb4l3jar/1ZE+5l56KF8bN0lfzCn9X59sFH72dVgirhz5N2LCkVtJJ0vLT5HmEYLCatetWjqa/VTdnXPc+6sEGxv8vuJtlx1dCsuz73htTlxR9c0tz51X7qmBejX/Y93zH3wupJOdTx1v6VLmGYKoeGd+lzavGfOVxCaZ8/WQVSG7SfjqthWlr8ORQoPO0Tfl9eMrylHc+3MzyepB2vUgoj4bCsagJImu56fxJ1xtVR1mMa/aqfHK5UTic/lBYMVCXJOs5Ly7KPX6q9eq+97Q3pWMnwoLZXMoQsT8nPru8t+f2IXkv77roqQkmNaa6IFlU2ilVMtE2y6qFtiwWVtPeLVUm0rdqgtvg2lZowj64l65f+tCCguRtpFZRWVRJ1fnfujNdahEO30kKEjusmWqcsxUJHpb/wZ1VV/PGyJnqntUuL5tekKVVB8VcCK1fWvJ9y7NClf1euiNdahH+T7RkVpErbuadQsGhdMVkbP2tLneywc665E1pC15Y5j0O0rzrilS7JjnolQShJn791RaLt51fY8vRdqQ1pdBwFimQwSVZE0o4XtiGUPJ6O1Z7Pq+Fa7b05YpbddeiWOqnldlTvfrqlox7uo45xcqjWPc+sip+13lbaEyI6gqoHyRAUftbuRGGquwSqYgglNaAOv58DohsYhouCR1rQUDjQ62Ew8cOz0vZR+EgGEK1nhQx/bLVBbfOPupKXHtVmdA/lzhtI67D3CqskkcxhQvHQrazL8erYWUvWUDLJqkRk/cKfNXwr/AxJLjCltEtL1vn9sLisEFTsfElqc7Ld2j/rQgTJm0LqnjFp6sJQUoN27knUwU12krMkA4c6zNo+7FD7uRzt8dLqJXb3nMfcoucdSW0N21vs80syhKXRpPQsye9mRonzSbJNxYJjMbqniCa2J2Vd+ndYyrCupBUbl7lHDd3aXUKJAkFyqUayI68rZoXCkJIcclWJWrW3GIWmSueyiCo+ae3zS2dQ25OBSvNiNMm/O4cTQkk7qPLgO/x6nkadf4WHtGCigKHXw/d9RSOcc6JwodfCQKIKiAJJ2nl9sMkKHtrHhxQqJ11fWlUhGQTKqZJI1iT3sANcC6WGFWX9wp8VcMJJ7rWg46mKU6zKU6604W7lDtuSrEnuPihKLdq5u9FwIT9JW/MSkksoq9OtznQ4tCn89V7Dw0KVVEvSnPzTD9vJ1xeWWlC7NezJL8nvIpT8/NUErKyqhyQDRbEAU0sKJP4KWUnlhI9ilkfBpLsO3fI0EVqdVF2hSY/JpdzOa7KjrcvLenrPHycMJOowJ+cx6BLFWXQctVcd66z2dkSHP1nNKdZGT3NP0tqnpZIJ8+2leUNJ+o58OElWsboDQkmV1LFXpz4tFCQpTChkpA3n8iFEISIUHlfPfXjwIcbvl6T3JCuQhLS/KiflbIuubettbSsc+hU9+Ut6qUpJ1i/ylfLnreQX/qwqTTjJvVhVplzh8dKktS2LhoilVUkqOUb2JPfC3yRrCFwl59gdqWOtYT9+6E+4hNSZzqoUJIPG24LOu+ZEhB3xwiVu21ctqSV9blWD/BJ+F6Finz9P7Q0uCiQdNWRrd6COqSZC17ojP3FonzZhw094DydeK7gkO/zFqBOt/Tv7V/5Jw8tvY1ej4KeJ7MmKiejv7sNT2lW6uipCSRXUmVcgqYT28cOzkpUTBY5yg4HfNlnh0DF9dSQtrBSjqgkVk64r7RfxcAiQOsVpv6Qnf63ftW6t7Xih7f841e2zn/VoanLPs36R1+V2K1lqWYnwVZeszrnud5LWhqxF20t7J7mrPRoillTuXBIvrXrVc/iI5u8p7TuUSifj78nUWU9S5z05AVzVl7D6ENL2aceplY6sLnRku/PiL/3bkbrbDRM9BZKwc++H+iQvY1tOaEiGBO2jJRyapQ6wtgsDkM4l4TmyAlKyutCe9lYqOfm+nJDi25e6dPJVrtQWf6UtTdxXG0L6zhX2OrOC0x6EkiqoE18thQYtqpwoRBSbDF+M9vEBp1jlpFzt+UzoWKU6n2nDh/QrevKX9FK/yEvWBHR/vHKXYiqd5F7qeOLPW85Sq0nuaZPbVYUpdfyw2rPjmZm2a3Pby22GQ7eyqkN7+iR3VTJ2/fbDzYuu6uSX5KTstBsOpg3HCisPWpJVh3JvXNgZNJG83M+fdvWtjlTO/JBq55DIrbNu7PBA0t7hX3lROAiDhDqp/jKxycvYltPJz7pilg8d4n6V/2HLHK7wvXKU297O7vBn0SWB/WV3k0tnXQ44SX9Lfe9qg78McEjfcXcYzkUoqZAqCrWoKihA+OpJseNlBRbto/19yGkvHYtqSfdTbpVEypm7UMtLzNZqkrvv5Gd19neWuCRxlvaEoKzvPXm/lKzqjpcVFJnkXtrERGVBw5T84iere8lwIdUEjLThUV1F8c+fnPPRen7IPU+WHhaZ/NxhZSc5PGxOFYGjkkrRsytK/+3ae0ngWl1SuLMlQ0Q4/6MWfCXBVwu8sAoSdojD4JNWKUl2lGvd3lLCq4VJZ91kMKtqVAv6zhXikuEw+Vm7IkJJhRQSVN0Yc8J3bNrbVrt7gEw8/Xb3mioX1VQ90qj6oePrfic6bq3ouL79arvO4dtfq7ajttJ+Efe/nqfdSFCd1bQOazlXeUqjc2VdWtdT57tUB9zLGr6VVhFIbpv2ubICQiitbaX2KSatOlXJsC3fHia5d5ywI57shCfDhSoLYaUhXHRvjXD/am+mOGngyPhZ5wg/f9qckvA1fR+l7vyeHM6W/E7DdVWZih1P59OkfE/7Jo9XjL86FtqqdWe32PHSJlqrI1ysAlOqfZ05x0NtSV4CuKPOn/xOSk36r8XfsbvcxT1EKKmCOvDq3IsfRqXX1Llvb0jRcbW/QoNof61rqSac6HhhANFz337fNt9+dD9p1YisKz+ldoB79WrVAc6aBK7zrLvkLW4yug8Beq6J3np99RkntbnBX1YFQ5PyfafcP2ZNck+GkLQqiw9NftK5jqlHf6+S1WecbGujNpZL+6SFGM+fJ0lt1X7hUgqT3KunX+OTw63UEdaiDm8YOmYc0DrEhR1sdYZVWfAd4+SiznvYgdd5ukK1RJUe/3nDRZ9NV98q9vklvC+JttUQL+2nz6fQoEXP/fFCCmpJyfuS+KuDhQHQHy8MJJK80lkpyzcujZ+la+9d2F+M2rtkc9v7OXUHySFOyUv2iobyaPJzOGwqS/Ju7mHn2s2hCKolkqx0JDv5yc528v20u8Q3t7dG9xBRG/yVycL2pH2eSul4ad9r8nOGfwMtqhhp3V85q5xQUmwbHSt5h3pdpKCr67ErEj9HB9GwqK3RsnHxP9wiWhfNLVE40B3eywkxGmZV6jhSTSBC16SOqTr9SeqYJjvHek2TuZN2Lllkq09/WbzWov7gw2zAta07CK4zn1IJKEUTyBvfc1m8pjkXH08NTSG1VW3O2lbVh/B+H/ouFDCy5lkUM+iOu1sNAVNYKXYcVSMG3XFXvFaQ9beolNrSY+gwW3VM2/HHdRMn2cDf/tk9z/pbJL/rPUHy1/VyKVCEnWh1kMNOtqokCiXF6NzqTPvOdbhP8njqnGu+S5IuBax7lMiLH/iZTRrUunJS6jjJ98uV/PyhSr9ThQ61KwxpoeT3VA61Let4IV1tS0Oqil0G2FMoeduh729z/5JPHftje2Hlc/bzf95ny1fvtMZefW3tunpbvHKrez5v2XqbGy0XvO4kWzduL7fPyD4tv92O6FNnIxt72oje0RK9rucHDuoVv9s1qKOqTm1IQcKHibQOs6e5CMlf9NWxDYdYJbfRewo+voOs90PqHIdX5dKch+Swr2rbmzyWZB0vfMw6Ztrnl+R34IXtlPC4u647LX5WkNauSqR9Vt+uZJv93yIp7RhdDZWSTqBw4KsRvuqhyoWvqqh6EVYuiinnOOUeC91b2q/1mVWSEr/Ih1QtUVCoVHLuQ8NZ58TP0qnT78+T9lkk2Q6FiuS8jXIlKzmlPmPaedImt1dDbcm8Z0xQucrCndzLo/CQ7JCr4xwqFUhEnebwXh+qAviOt6+otFep4+i9cjrvnrZP+/whHU9D1LRdMS3Hen3RNoTHK/ZZRIFL25bzmRQu7p17d7xW2tB4kvqIXgfashdOsJ2Lz7Gn//1aF+pO/fjd9uNbttot92y3G/6yxn737xX28HPr7N6Zi10gkYbJhUAiqpj45YnV2+wvi7bYz1/aZF+ftcE+8cg6O/OulfbzF0v/qt1Z1EFN66irw1ysg5+lzfCmRAc4nFydDCRp2lztKjpecu5De9qbRscrdUxNUE9+tlLCY5Zqa9rnbC8flPzn80sazfPp6oFEqJQA3cDKQ/eJn2VTJzutSiKbrv6abfrx9+K1Fv0+91VrOOM18VoLVQRUuSi3YqKAoV/vk3cxz6qAJNua9fmGPPJc/Kw1tU8BISvMJKl9ChlhEClWdfEVnJDOpaFqtaDj75g10zZ+7f/Fr7Ro+vAnrc+bL3bPdb60z5j1vezuFATKvWpTsc6uDyaaXF2q8xwKzx8eX6/7Y+r1tGOWqpSIP4aOl3Wccr6Dcjr6Sf64yePrWNUcT/R5wuP577uS49039y53+d+z9nu9u0SvrrqVdgd3Wbe+t21eeqT13D7Kbr638mqqhFWSUlRFuXxq3y5XLRFVKDRvIa2zrA6yhllpqJdCgp8AnXbZ3eRQomQFoBR1nMNhRDqHJmGHdHxtV4v26lgaApXVOQ/545aaB6M2uWpQdO5ywoekBTS1SVcpK3aM8LP6c4rm74ShQsfQULdyjlXq83UlhBKgGyg11EjSOtLeusveFT9rrek/Pm51k7L/BayOuzrFqoLo/P7+KLqsr5/fUeoyuJovonkk2lft035heNH7WZfXLVUV0b6+QuPbp7YphPhLKRcb5uTDl47h98n6PGl/A+2TdYljUXuyQs/m638cr7XWePG7rP7QI9zztBDkAxa6lyvvud6ue7wwLO+ut341NZSgtTCAHDfhZLv40Pe3CSU+iGzbPNBVPdrj1BMPsj6HFf7ZK+VNkxrtTZO7fkfPd879Y1f/tVztDANFe9ub/PxerY4rlXb4/WcMq0aac1Jtm/zxQl3975yFUAJ0A1m/mHvldOC7qqzAVSxkdbasuR3JeSpJWYGrK302oCtKzh3Zb9h0+/DxVzVXTobsnGFPzurX7iDi7TN5tO179qvitWxduToCdHfMKQG6Af06Xkyp+RtdlcJWWiCRrtJpVzUlLZCUqhAVo2MCyKbgEdJlgDUUTHNBfnTNMfbl67bULJBMP2BKWYFE1ZEfHzuIQAJ0EEIJ2nhp2Tq78lcP2MXfvdM9R/6K3dVdneOu9Ku7KjqF6kd2x1vvFav+6DN1FVmT2xlCla/kpXn1PJyTofd1iVx/iVsvua5tvPAYonW978/jjxvyx/Pb6upT4TFROQ3PCu/Y3mvHGLvzL0e4iepf/nVhXk4tNA7oZ5e842ybdGrxCdoKI7efPKRbDNcCurMuGUrunrnATr7qFrfoeTHqPGtR57nUtruza++e5ZZi9H45IWPS8P52z8yFdvdTC9xzr9TxkY+uViWpGzPOVT80ibww0b3l3iZuGFS06LK6WYFEAaurdPh9u5MquVEiak8df794CgZ+/do7n2q+yaHuVq7L3vqgoNd98NCjrqTl6b3wTu9+/eRP3xi/UnjNH0vH1bombvttdE8Q3UNFHWgfZlC+W2fd2BxIFEbWzzvNvnv9BLv/meITjCulMHLKxa+3hf2Gxa+05SsjhBGgc3TJUHLStLE2aUR/FzKu+tWD8avprrtnlr3tpP3t4u/c6ULMnvrL/nX3PGNX3fRAvNaWr3woaFRD+7r99+Dgl6es4VtdrUriqU0KJppErkqDqiJaNAyq1BW9si5rnAeFqiT9LZJXGatU1pA1lOarFbqcrL9aVBpd6UmX+/X3+1BQqJTOoxv76RwKMLpylI7nb1yo17QetkHbaB+1L+3qWcimMHLbM4Vw58OILttbK5o3ojByxgffXjSMaHiWDyPhfUoAdKwu+0/bFecd6R7VCc7qCOuX+5OmRwFmeH+75n2n2DXvPaXVL/vlKqci05X570iBLKuaoeCm70eP1dDfQ/srMKLzae6CAkhy6YpzSdTWaisJXWkCuCokakvyO6+kipP1d+M+I9XzlQlVQ/x6GgUWVSt6vParLlz4+4worJRDVReFCh1Hj76i4i+Rq3V/4z+9r3t4KPj4O5lTKamMv6pW/aaD7C93nFazMKK/zX9c+HL7yGXnu3kjWWFE4cMP0/rCof0JI0AO6q6MxM+7lEF9e7shROpo9+jRw1575OT4nRYfuu5e+9+LTnDb/vaBF91req4l5DrtTy201Ru3RGs9Wr2vX/+1rzrbel/n0zJp+AD3+Oic5dFWhX20vnrjVvea3ybJn+vRl5a7RccMt/PHDPcvBKLW7Up7LcvF37mrub2PRce+/NUHx++00DlXb9ja3B7fjvAcPtjotVui70Tb+mMlv9+0z5H2WpLe07HSvhvR+1//3eNRWxbadX97JmrzFjtkUvYvWnsKDYlqOPnlbRa93hX16F/4uyZvqJhF1Yd+//OdLlX1qcV33t3+bl2dOvnq8OvmfPrfIXU4v3HbQ/a2KHDc/eR8WxP974WqItpOw7YUFA6ZPMIee3GZff0dJ7tjqMrRI/rPa4+e4iodt/z7+eg4A9x2ei5670M/vssFDp1H72k/H0D0mtavvaxlcvSHfny3Cz6qzmg7ve+Pi+J0pa3v3P8VW/rCCXbtrTvd/+63hyoir3vdKXbUqcdY72nTbUXjQFvWo+2/SxU8XjOuj10+tZ+rihw4mAnsQJ669E8Bqn6IhhypsxpSRUBDvHxl5J6nF7qAEdKQpR5v+E6rIWAnX/Vb97q4TvjSwnF1fD33i+gcqqJoWJS2nXzpT6MAcKcbKqXXte7bpW21rkCidone03b+fPLSsrXuNR1Dx1T7/LH83Bit+9fCc6TRMbT470rbplVLdL7w+/HD3fTd6nX/PWlJqzb571ftF+2n/bW9/xz+u9Fjst16rtf0/fvX9V0ltysco9D+GVPHuPNqG50D3YvuD6JL5uqmilkURvT+oDvu6pLD0NC1+OFSCh5aFAAUEgpDq1puhKhHv67t9NzPN9H+2l4VFFVZtI3e07rCjH/fP9c5tCgI+WqJjpc0MT6HjqP5JQomOjdKu/WZX7mJ7NVWR/ywrLd98M1uaJaviMzbVhdv0cJXRFQNYYgW0LV0+fuUuI5z1CH1w488va6OuO9Aq8OszviuXxaua64OvsJEcj9to201HOnK86Ml3u6uK17TZmiS39af464rXtv83O/nj6M2pg1t8u1/8eq3un31XK/5eTO+bb5zrvZeNGM/937yHGl0rBnTxrj3w/bqfCF/LN8O/33puaoV+vwhHVcBxB/Hb5/8HHou+lv4z+/f8+32gUT8/qLXFVJEr/v2J4eZaTu/D7onfyUuDYnSfAoNXyKEAPjKXVfb1T+vt7nL1sevZFP4GDe0v005uPDvh7rBg1ODR0iBQxWQEb31WM/lfIEurMv/PHDF+Ue4x3CCtjq9YZUkjTrgnjrkfvG/yut9/7wcYSAR/3zO8sIxkoFEx1YnW20trLeeZKn1MCx5qg74YyXPkaRz6PgnTR/jnocVGn/eUtICSSV0rjCQhHy7/d9C2+jvqO/FfTfx39R/V7792l5/K49A0v1pbkVhfsW5roJCIAFw64OP20e/sbk5kCh0aHnzWce5yoeWj33sQnvPhy9qroA0HX+Cq4KkVUJcAIlCh6+E3H7yEFcNuXz/voXhWQQSoEvr8qFEHVktvuMqGjKkakIWbeupk69f3cNFv8qHv9iX4ifTl6KOtCoEqgr4TraqBeKHhHk6ZpqwQlCKOu9qV2Eo1m/doxc+L6bY91gO//cpJgyU+tzhorCnv4U+t47jg5o+m75HVU7KDVgAgO7joAkT7bdXXeCWP3/3A3blZee65YjjD7Zp+4x1S48+jTaobx8XKF4+urcLHH5R2PDDsHwA0ToBBOieusVASl8tUUfVV0mKdYTDAOErKmlLLSmMuJAQnU+dbA1bKtVZbw8f0nynPlz8+12lMx9OZk/7O2jxFE70mRROtJ8+o77bsHICAOj+NJ/nNQePc4sLHFGY0KKw4ReFDL/4iodftI/CB3NCgN1Dt/gn2f8ar462KgDl/LrvO7qaTN3R1Pl3YSk6Z3JIlq4g1hEUgNSBDzv0onVfbQkn+OfJ/72SQ9iy+M+gYWVh5QQAAAC7p27z84KvlrhhP2VUIPwkeF3JKRzOJVr3r/lOfXJ4VSXCSkCoI4ceqYLgh4Yl+dd9WMqb/5vpO0+rePi/hR+eF/LBy/+dAAAAsPvpNqFEHX91bLOqJD5U+A6utvWXydV8C3V4w8V3ctXp1bY+QOg9DRcKO/PFAove07EUBHRuzYNQx9tdTSt6r3lOSdyuLP79UtuJ2ppWJfH0enurJb6q0dyuxHdQ6jsJH9Ue/S30XSgk6vvx37We+8/hvz99Pv+e1sX/LQEAALD76bI3T0wq3Cgrey6JOrR6Tzfa07aiIKOb/+m1R19a4V7Xr/bJGzG6YDJ9jBvqpW0uP6Owj7+530nTxrS5gV/yPR1XnWvd6HHNxq02I2rLtepI9yi0Q+/p2LppoGtjU6EtoWT7/baHTIyW4Px6XZ/Lb5fGn8N1+KM2+O9nUN8G1x4dw51v8jC3nqQbLbpzx+1J7u8/v46f/Bxp35uOUfju93I3xtLfQ+f24Un8+7arcF8UtV9/q2vfd2pqGwEAALB76PL3KQEAAACwe+OSFQAAAAByRSgBAAAAkCtCCQAAAIBcEUoAAAAA5IpQAgAAACBXhBIAAAAAuSKUAAAAAMgVoQQAAABArgglAAAAAHJFKAEAAACQK0IJAAAAgFwRSgAAAADkilACAAAAIFeEEgAAAAC5IpQAAAAAyBWhBAAAAECuCCUAAAAAckUoAQAAAJArQgkAAACAXBFKAAAAAOSKUAIAAAAgV4QSAAAAALkilAAAAADIFaEEAAAAQK4IJQAAAAByRSgBAAAAkCtCCQAAAIBcEUoAAAAA5IpQAgAAACBXhBIAAAAAuSKUAAAAAMgVoQQAAABArgglAAAAAHJFKAEAAACQK0IJAAAAgFwRSgAAAADkilACAAAAIFeEEgAAAAC5IpQAAAAAyBWhBAAAAECuCCUAAAAAckUoAQAAAJArQgkAAACAXBFKAAAAAOSKUAIAAAAgV4QSAAAAALkilAAAAADIFaEEAAAAQK4IJQAAAAByRSgBAAAAkCtCCQAAAIBcEUoAAAAA5IpQAgAAACBXhBIAAAAAuSKUAAAAAMgVoQQAAABArgglAAAAAHJFKAEAAACQK0IJAAAAgFwRSgAAAADkilACAAAAIFeEEgAAAAC5IpQAAAAAyBWhBAAAAECuCCUAAAAAckUoAQAAAJArQgkAAACAXBFKAAAAAOSKUAIAAAAgV4QSAAAAALkilAAAAADIFaEEAAAAQK4IJQAAAAByRSgBAAAAkCtCCQAAAIBcEUoAAAAA5IpQAgAAACBXhBIAAAAAuSKUAAAAAMgVoQQAAABArgglAAAAAHJFKAEAAACQK0IJAAAAgFwRSgAAAADkilACAAAAIFeEEgAAAAC5IpQAAAAAyBWhBAAAAECuCCUAAAAAckUoAQAAAJArQgkAAACAXBFKAAAAAOSKUAIAAAAgV4QSAAAAALkilAAAAADIFaEEAAAAQK4IJQAAAAByRSgBAAAAkCtCCQAAAIBcEUoAAAAA5IpQAgAAACBXhBIAAAAAuSKUAACwO3jmA/ETAOh+CCUAAHR3j7/GbMkvCCYAui1CCQAA3dmcL5utvrfwXMFE6wDQzRBKAADorhRGkiFkyQ0tIQUAuokeuyLxcwAA0F1snmt2/2HxSkKfCWYH/bbwCOwBdm7ZYpuefc62zl9g21astJ2bNrnXezY2Wq+hQ6xh3Fhr3Hcf69m7t3sdXQ+hBACA7kjzSIpVRBRIjno4XgF2P1sXL7bVf/yLrfn7vbbh0cfiV4vre8jBNvDE423QaS+3hlGj4lfRFRBKAADobkoFEm/Q8WYH3RKvALuHzc/PtqU//bmtvOP38SvVGXLGq2zEW99kfabsHb+CPBFKAADoTnSFLU1oL9fIN5rt9614BejeFl39PVty7fXxWm2MfNuFNvrS98RryAuhBACA7kKT2qu5utbEjxYWoJva/MKLNu+//59teOKp+JXqNIzaYkNOX2rrHx1oWxf3dov0PXC6jf+vT1qfvSa7dXQ+QgkAAN1Be+9DQjBBN7XuX/fbS5/4tO1Ytz5+pTIKIqMumheFkWW28g/Dbe6XpsTvtFbXv59N+sLnrP8xR8WvoDMRSgAA6OqqrZAkEUzQzay995/2wgf/M16rTL9D1tqEjz3vQokojCiUlLLXN75mA44/Nl5DZyGUAADQVemyv89+oPSk9vDSv9qnGE1+3/dbXC4YXd7Gp2basxe9M16rzKi3zbNRF82P18wWXzfOFl87Pl4rbd/rfmRN06fFa+gMhBK0y/JN22zF5m323OqNNnvNJlu9ebsdPXqAnT5xaLwFAKAqCiIKJGkhQ4Fi5AVmA6OAoZCRpH3WRPtn3UhR+yuYpO0LdAE7N2+2Z9/6dtv84kvxK+Wb8r9PuSpJ6NGTK6t89Jk8yfb96U+sZ58+8SvoaIQSVGxZFET+vmhNIYis3mT1PXpYzx5mddFjXfw4tLGXHTlygJ06fnC8FwCgJB8m5nylbRjxQaTS4Vc6jsJJ2vAvwgm6qHn//QVbcctt8Vr50gJJsXkkxQx9zVk2/r8+Ea+hoxFKUNKSKITcuWCVPb1qoz0TLb2i0KEg0isKIHpUCHGhJPp/PpT0jF8f2qfeDhvR32aMI5wAQFF/GxY/SVGLuSAKJwo7aZcTJpygC1n3z3/Z7A/8R7xWPoURhZKkcueSpNn7W/9j/Y89Jl5DRyKUoI1FG7faH+evtidXbrCZUQjxAaQQRqLHKHz0suh59JiskLgw0tO/1vL+kCicTBrQaAcM7Wvj+1MKBYA20kJJR4QFDeea++XWw7qYAI8u5Pl3v9/WP/RIvFY+TWrXFbaSnv/QdFv/6IB4rTL9Dj/Upnz/2/EaOhKhBLYwCiG3zV3pAsW1zy5x4cMFEBc+CiHEhRG95t9T2FAoid4vVEgKwcRXSFxI0ftxKAnfHxwFlPH9+tjUIX1tTL/C9cEBYI+XDCUKJEc9HK90AD88TOcBuoh1Dzxos997WbxWmUPu+mf8rLX2hBLZ+7vftP5HHhGvoaMQSvZwtyiMWA97dOV6W7ppmz2xYkOhEhKFBx8+mh/j19PmkBQqJOF68H60EoYVPdf7ehzQu97G9u1t+w5uslFNDXGrAGAPlAwlqo5oIntHypooD+Rk7pWfs5W3/y5eK58u+zvtF+khvr2hZMiZr7YJV346XkNHIZS001+enWNPL1kZr5l94MRD42fpvvX3lnLk0L597E2HTY3Xug7NIVm6aau7stasVRtdkFi1ebs9v7owlKs5dLQKIS2hw4WQ6Dht3o9f75n2GL0/oKHeHXdUU2/ba2AfG9FISOkKdsxf4B63R4/148ZaXbQA6ABZc0pGvjEKDscVJqv3jqsafl00DEtDrzRBXhPhRe/pueaQ6HHzPLMtc82Gn2s27xstVRId2+/TZzxVE+TuiRmvsB0bNsRr5cuaTyKVXg44qa5vXzvwnj/Ha+gohJJ2uv6Bp+ziX/whXos6cP9TuMHPSyvX2mf/dJ/N2Hu8WyYNKST0uv/4mnuU37/7dfbK/SbFa92DLv8b5QZbGYWUVVu22eot223t1u3Raz3coxYFjHXRowsl0bYujLjAosfWlZKWpbAe/V9ziOnXUOfO1a9XnTVFy/A+vaypvme01Flj9IjaUwDZ8Kvf2I4FC23LP//dHEiSFEzqx4+zpte91prOjzo5Odjyr/tt4003x2vpBlx+KSEK3UdWKNnvW4VQodDgKUwojPhgopCy+r4onHwk+odjYfT8b4XXtY8PMgotq+42G3xS+pW4dEydC8jJ+ocfseff9f54rTLFQsnWxb1t5hsPi9eqM+UH37Z+hxX/4Rnts9uGEoWC6x540uasWmtzoud3Px/9D3pk0pCBLiBMjJZkYKjGF/96v33qjr+75+869iD77vmvcM/3/tyPojascc8/c9qxdsVp0b8wImEoefyjF9n0URn/EuqCVm5e4h5XbVrqwsOqzUvduoLD6ui5gon+b3CfEfHrPayhfpR7vml7zyhkDNLb0Rs9bJf1c8+1jY4Vv1xYdytmfaPw4d9TEPEUTFBbCh9rv361bYwCSaXU6W867xwb8KEPxK90DrV11YeLX6px7Jxn4mdAN5AVSlQF0TArhQofTLSuqsYz8T93rsoRLQoWurqWQox/PQwlWvf7JBFKkLOl1/+fLfxmdZPKiw3fkkrvU5I05rL324gL3xyvoSPsdqHEh5HP/jF9slPST954ul105PR4rXIfvPlOuzoeknXl6cfZf73yWLsnCkCnfOdG95r4UKIvuj4IJcs/934b3NR1rkS1YtMSFzyeX/W4iwazVz/hHl9wj3ElI/pP4VEhInoeP2a/nrFf9MS96rbV3JLhrd73+/VvGObWR/Xbz0b33z961aJwU/gXd9/4Ee2z9n+/ZeuiQNJe/S+/tFODiQJJsRDV+9ijbdgN18drQDcQXg0rvGmiwoIqIHptQhRQdOUsF0qigOErJbpCl0KHp6rJ4JM1bqUQSjRES9tqG3/cJEIJcpY2n0QVkH6HFH7k3bq4j6t6pM0PKRVK2nNZYGFeScfbrULJVX+8LzWMqDoyY8o4VzERXzURP9yqWq+/9lb79ePPuec/fMMr7e1HH+ienxqFEp3noqOm208uON29tnDNeht/1ffd86aGXrbui9VdXaK9FD6eXfmYCyDPrXwiCh8KIT4MtISHViFC7yRebx0iCvv1NlVDoufbBlrPKJnU9yoM59rVc6Nt2LrKGnrVxftF/4n3H9hnuAslY/pPdeujo8f+vYc1hw90nOUXXOiGadXKsF/+1Hofc1S81rEWH39K5vAy0bCywV/9QrwGdDNhtaOjKKSEAYVQgpxlXQpYgUPhZMhpS92jDybrHxvYKmik3TjR0/aa8F4tLg3c8XabUJKsTiiIqEKRVgVRNWVOPLRqxpTx7rFaJ3zzF/bPlxa653dccq6dPnWyey46Tzg07KF5S+yo//2Ze77P8ME26xNvd887k6+G6HH2qidsVfTcV0Rah4z0Cod/XUO06nYMsEVLtptGUy1dvdpeWPKs9aq3aOlhDXWFR6036LU6DeWKnvfZy7b0PMzW7xxsz68dZP9esiU6YLRxlGB2RY+7ko89etqMsUPsxNGD7IpD2ve3Qmu1qpCEOrM6sWDifvGzdAokec13Abo8VWUef028EiOUIGdPv+4C2zIno5IX031IfDgRBZSVfxzuJrLrPd2rJEt7rsLVe+IEm/rruDKJDrFbhBJ1/vf+3A/jNWtVnehoOq/OL498+EI7aEx2afC2p2bba3/8W/dcc1nufP/r3fM0yUDT0Vw4WfWkvbj6SVu9Zamt2bw0elzWHELqdgyy+i0TbNX6tbZ4xWqbtfCZKGT40BE9RrnChQ+3tISSpsbJttZm2MwVPe3JFYWw4UOI1UWPUejQ4874USFEYWTCwCZ7635j7DOHda8LAXQnpTr14ueLaOJ7OfNNtP2oe++M1zpOOfNJ1A4muaPb0QR0Pwldc0Y07KrWNzVMCyRCKEHOZr7mPNsa/fumFFVOhpy+1EZdND9+pVAJWXzd+MzJ7tKeq3A1jB1j0265KV5DR9gtQokfKiUnTRlvf31fdmc/i6+e3D17nv1t9vxWE+NFw78+88rj2gSFxo983bbu2OGeL/nv99mwvo3uWO+4oXBFLk2o9wHpB/983N77q8Il5d542P72s7ec4Z57qvZc9+BTdt39hX+g/KT8l+09rnmifJLOpTk0vs2l2luJJxY8Z9f94wF7YfF622mLrbHXcntuyUNx5SMOI0EocWEkWu/X73hbv3Nvu2lWdJAwhASPCic94sewMvKpI6fYhVEYmchd3ztUqfkYXjhRXFe7Wv6Gt8Zr2Tpjcnk5VR4muaPbUVAI55V4tQonGqqlIVtpV94SQgly9swbL7RNz2VXOpIUThRC9CiqmmjJGsKl96q9ClfjPlNsv18wT7EjdftQct0DT9nbUy7JW6nkcdKow/+TC05rHvK1bP0mG/WZ77jnferrbMOXL3fPw2OFIenKP9xn//2nwpyX/zz5CPvyWTPcc8maD+OlVX+SQ9aS1N4Lj5yWGWjSzFm20q7/+wP2s3sfciGtR49CeFCY6BEt44cOtHHRcZt6b7PBTSujl1faps3/sv5Nk2xLjxPsN09HAS3e3oePtFCiRx9GJg7qZ2+eOs7+Kwok6BzlhJJk1UPzN0pVJ6TU8C0dR/c82TFvfuFxwULrffSR7r268ePKmpNSqv3J+SQ6p+bOlHv8juQ/v3DfF7RRLDgonGhCe6U3Oyx1zI6oxgBVmH3ph2zdvyqb55hWNSmm2iFc/Y852va++n/jNXSEbh9K3n7DH5orC+0ZtuWDhO/Ii57fM3te8/ElPMfjC5fZoV8tdMD2ijrrz33qne55GDDC7d9945/sR/96wj3/2mtOsstnHO6eh5/Bn/+kvcfbS6vWtgpKd0bhxgeitDk02k+XQL7n+fnmL0es18MgVcw9Tz9vr/x/33Xho7BE4UGhpC5agnCSDBcThg22OavXR9tFISMehqX9wsewMhKGkk8eva99+qh94hags5Q7wV0d5sFf+2JNOvKqbui+IsUmp4vOqfuLFJsPUmqSu64E1jfaP+0yxzq+5r5kTYLXd7M9CkxZFNR0bt3PZeu/H3Db6p4tOmfa96QKk6o62i6tzWpPHpdURhdXTpAodjd2v7+utpVVfakm4AAdaP4Xv2rLbypdxU9SMNFckqwKSajaIVzDzjvXxn38w/EaOkK3DyXhfT/ac3lfPy8kbbhTVuXjD7NetDN+UPiH54S9xto9l0b/koiEoSS8R8lZP7rZfjfzBff8hgvPtPMP2a9NuEhWesL3/bnV1nAOTRhWRO9rSJsPJpWEtTnLV9rfZr1gP7vvEfv7s3NceGgVUuJQUawC4t9PhpAwpJwwfrj94BWH2MT+jfGZ0ZkqveqW78iroqFHrZer3GFfScWunlVqPozaWOrz6TOkzX8pdWzto1CUlJzDogCiik6537P2LRXGsAdSKMkabiUKF+4x/neArtilQFKMqiJURtAFLf/1zTb/C1+J1yqjQFJsPomnKkk1V+Ea94mP2LDXnROvoSNEPcTuS2EhpMnjpaiTr9CgRc89hZGs+ReTBqe/vmjthviZ2ZgB/eJn0b8/VqUn9UVr1sfPou0HFrb/bDycSxSqkiYOKcwRER+c/HwVUehJVkH0OXy1R1Q5KdfEYUPsrSccYX/86CX29Jc+bJ86+xSbNHxoHEhaFq2rMuKe6zGx+Nf02Pw82nbi4P72+/OOtz+eeyyBJEcN8XCpcqmD7SeXL4sChutsR2GjlGoDieh8aZ3/UsPOpNwgoOpNSJ9TFQ9/5S49Dyk4pLVJwkCi0KftKgl+OrcqO+V8r9iDKDwc9XBL+EhSANGiaoiWUoHkoFsIJOiy+h5YuK1CNfy8klLK3S6pPW1Debp1KEkqZ1K3JrKriqFFk8rLoWFUniaue2khQ/z9UETDp7yFKSEmvGeKhoppKFe4fPZP98Xvtgj3yZovouFf7TVx6CD71Jkn2VP//QF78rOX2puPOchVPpoXVT38Y7y4q2elLHrvE8dOtZkXv9xeNnZofAbkRUObquUDisJGslMfKieQqCMfduaTdK5kJ33Lvx+In2Xzx1XFRMHCBw3dR0UVDU2C12Pye9CQLA218nNWkpPp1Z40YXWjkupIko6/6j8/Hq8BMQWSg36bHUzKpUDCcC10YY37TnFXuSqXLgGs6ohumljsUsChakKJ2qS2oWPtVqGkHGEVY2JKBUTVCFVRNPxJi4aHZU2AbxUyglDiKxriqyw7du60Jetab5+s9GheSdoSCvfRsKzOoorN9970anvq0++y711wmr1syoTmSkmrCklcOQkrJK468voT7VPHlL4ELTqHOuzJKkA11GnPqhyUujqWDwjDo8diNA8lpI67woavZGjRsbQobPjAoUWT7hU8tGhyucKCQoParGFarpoRhB5Nuq+Gn6ivIFOskqO2ql0KSFlhLC2IAc3BpNpQQSBBNzHo1PR/p6TRjRN1p/ZKJq5XM8m9kjahet06lCSHVYVhoBxhFUP7qjKhuRqqoqgaEVYkvDDILFrbUikZGwzf8nM5xA+/CgPM8H6N1ru+rtV2mi+ioVilFlVTvLRQ5YXVnfA87aVK0VuOmGa/e9c59uSH32Lfe93JduLksc3VEF9BcUv0XFfW+v35J9jLxnF39q5GHfVaBBN1otOGQRWrFihQ+EnhvnOeVd3QPIuQgoYW996HPuAWHUtXslJnPmyL1hU8tCgkaVG71D5PVwHzyhkalsbNYYnOpcCTRZ9ZbdVn1HNNbs9SKtBhD6VgosnplVZMNFyLQIJuYshZr46flUeX+VUw0aV+SwUUbat7mVSq0jahOrtVpSTssGdJm1+hQKJ5Gr4qoc6/Jo/P/vQlbuJ5WJFoNRxrTdtKSTIY+SFlYYAJ55946uxrKFaxRZP4iwWRUPhddFRFRRWQtxy6r/3+ba+ymR88zz454xD3OXyF5GUTR9rMd5xmEwc0xXugK1HnWJ1kVRjUqW6PZDVDx/ZVi7RFgSKk18Lqhg8b6rzrWCEFCoUHhQ+FAM3f8FUPDRcLqx3lXDXMX543DCql+MCkRd+d2pj8DpJUTdE5/KIQlaXY1b+wh6t0KJfCCHNI0I30mTzJhpzReo7tqLfNc8Ouig29UuBQ5UST2BVQ9KiQotfcFbeiRa9nhRYNBdPxda7Q4KgtahM6XrcOJeEkcPFXvCqXr7Ro3oaviiiMKABo8rgPFFkTxVsFjWD4llcqwITvh/NQypU1oV7CNl90RMcP85oYfaZPnnig/f6Np9jvLjjJPnncNPv9eSfE76IrU8ddQUCBQCGgEuqMq1OupZJOfTl0vGTlQ2FE4UNhRNUErScrMsUqEGl8OCh3HohCnA9MWvTdSan9/bAxvxSrqgBF+WBSitvulngF6D5Gvv1t8bOCIactc/NGyp0PooCi8OGHd+kSwKUuA6x9dI5+B7fuW41KtAUdp3sP34pCQ3jFKg1TKlwKN7uznja0yldINIQqeSUrzS8J9wmv8LWwVfWjr3vUDQfTpAWYcPhZpUPPJCsshW1O+0wdaeLAvvay8cPtU8dOjV9Bd6GAoV/+fdVC1QCFjXAoVdrcDT+UKlnRKFcYPkpVPkpNcncBqYzqSEj7SDkT6F1VKeX4Cke1DGW67wlQVDmBQ0O9gG6o98QJNuYD73PPVcHwRl1UqJh0hCGnLXWPYbVEbVBb0Dm6/fAthYSw4qCKh4KJJoT7S/6qw6/nmjMSUqgJLwucDAbq3GdVXzRpfcfOllu8NDX0co/hXI7wamDhnJKxcShpfbnf7EClNvp2XnTkAe5RtM/en/tRq8+ZbPNnXnls/AwonwKGG9qVGEqlDnmlnX5PnfZiw66yKh9+ErmUqkYkg5GOV4rfp5xKSdZn90PAaqXagIc9TLGhWUxsRzc34qK32MCTZzQPydLwKz2qoiF+uFW5V90KpQ0HU0XFL6qq6NxqAzpPt795oqgzXujQVzahW/NFtG94I0IFHIUJP5xLlQbx6/7mho8sWGpHfK3lqkH+9TAUhDctfOcNf7Rr7n/SPf/e+a+wS449yD0Pb8zo+Taobf4zaZ6LhpWJwlXyqlxpkjdVxJ5NHfRyhgyp+tGeTrGrfEQdfHXU/R3PwyqCjq0hVqpQaOiUQkkxqsL4YWWlbmwYbisKQMUmjWtb7SOljh1um6TvtVgAUqWpEtVUfLAHS95gUUGFeSTYDezctMmef/eltnHm0/ErLRRKFEj85HWFl5De98O4Qj7I6GaLfs6Jp/e0T9O0/W3K979tPRu5n1pn2i0muqsDrzudq+NeDnX6/bbaN9xPISAMJP4O6knhPUqyhJPSfSCRcP6JJq8n2+3bEIascP7IZ155XNHPqs+nSfoEElSjnEASDrnSoqqHf83Pl0i70pXoEsCqvKjTXVZ1Ih5eVU7VI1mxKDX53M8/UbtLqXSuSkhXOvMVp3IWAgkqMvKClqoIE9uxG1EomPzVL1jjPm3vEdIwarN7TAseCh0a6qXHtEqKr5D4Y3g6ls41+atfJJDkYLeolIQUIDSvQ8OodAUqTSDXFaF8QNBNBdM66264V7z9y/Ye11yVEH9vEM0B8fv+9MGZtmZzS9nv0hMOdY8aSuWHcIXbX/2PR9yjHDdpjB02bmS8VqB2+ytm6TEMNGFbQn6fcPuszweo413qZobJaoAChb+/h6jykRYk/H6lqjEKPKrEeAozxYJJuH2pqoeE7S9VvRDNi5Fyqkh+2zSl2paci6JzhWEtvNqWQlhWRQbIpDu5P/sBJrZjt7R91Wqb88n/snUPPBS/UqBwMeT0pW0mset1TVqXR09u+yOuqijJyor0P/Jwm/j//tvqBw+KX0Fn2u1CCYB06gSXGiqlDnHD0Udmho8svtNdTnDQUCZVDvzd04upNGSIPkM5bQ+DQqlj65j+KltpSn23+hz+fitro89c7FztHT4HALur+V/5H1v+y5vitWwamlV4XGPrHx2YeRng0LA3nGfjPvIf8RryQCgB9iDlduwrEXbuy6nGVEKBRB16Uac/ORSsWsmQUerYYTjKUqrqUw4FNg3fAgCkW3PP323Rd39gm5+fHb/SPn2m7G2j3/suGzjjxPgV5GW3unni7uzaYE4KUC39Wl+rX+F1nOSwJE1cV4e/VsJjFQsNlXwm1+5E1aNU2AmvAJZFoaU9320ykIRzdmoVxgCgu1N42P+Gn9r4T33MGvffN361ctpXx9CxCCRdA6GkncJLCifpSly6UpauDKbHYtuW8o4b/hg/K5/OC4TUadZE80qvBpWk/TXMKAwkouOXOx+inDb4Tn6p6o7CVjnHU8gJ57RIuUPCSvHfbaXBRNsr3GVVSHTuWl9yGAC6u6HnvMb2+9m1ts81P7CR73ib9Tv0EOvZlD05Xe9pG22rfbSvjoGug+Fb7aSw4S/7q4nn4b1JREHkugefctv4q3hpIr7uUaIJ6poMr+d6TRPU/UR9PdcEe12dSzdp/Phtf7Pr3/zq5on0hfuzFC4brOOE69r/wXlL7HdPv2AXRvvrGECSfn0vNb8hpM6zrkBVzvAiHVtDxZLDmfwxNKdEHe1ic0o0t8WfS9UCzXPJ4qsUWXNa9N7gr32xTYgSff6Nvy5+d+xi80mS9Nn1uXXMrOFcao8oTPnhaUk6jubd+OqT3wfYray+l/updBNzr/p8/Ky1CVd8Kn7W2srb7rD1Dz/qng8581XW7/DD3POOtm3Zctu+cqW7nLDoKlr1Q4ZYr+HD3Dq6LkJJO6kaoat7TR85zIb1a7TroyChywh7Cha6tK+uoKXnel83NFSwUCBRYNElft8RhRvtp5Bz0RHT7bN/+qf9OAoyev2LZ77MfvXYMzZ91DB3D5SfXHCae1/b6/w63ttv+KPN/vQ73c0UFU4URnRe3WwxGZSAkB8aFHagFRjUGa6L7yye1pkvhz928/E6qWOt8/rqQrVtr4WwHV4l7dEQrs783oBONf/bZv0PN9u1g2DSDSiUKGiEGsaMtmm3/jpeay3c/pAH73OPQDEM32onBRKFiCPGj3QVC11OOMnfcV4hQe+rCqLKxt3R9v4miDqOr6QosGj9s38q/EO8YM16G92/r9tf9yfxl/x9/XW3ufCh9QuPnNY8PExhRYFHCCQoRR1eLfrF3i+qUOhRHej2dOr9sXWMzuxY+3O2p+21ELajmvZo+8783oBOowpJv0MKgQTdgqodSVsXLoqftbX+ocIleYecdYZ7BEohlNSAG04VBQPdKyR5T5HwBoii+4goPChwqIohCg66P4qqHgo4rsIRPWrIlwLGwiiUjBrQz91AUWFGXHVm1NDm8PG32fOj1wZG7SiEIleJicMQAABl0z1POlqf6N9lW5cWFj1Hl6fhV2lDsHz4SPKBZdQlb3ePQCkM36oRP9cjOX9Dk939ECqFDoUMP89EIUZBQ+HDv+bnnii0+Bsibt2+w16+3yT7afS+v7mjDzTaTq9pCJf4NugYGvql131lBQBQBX9jws3zWjrsGm404aMtw46W/MJszlcKz+WouKN2f9CJ2/dbhe3D18RvGx5DHfWsGyGqyjD3y4VHT8fV8ftMKKzPid5fckPhuadj9o7eH3Sc2cg3xi/G/Ln959NxdKd4Lf6Yz0TfwZr4nAOj8+0XnU9t0Hfj6bPoGI+/Nn4h5s+tR+44320t/sGP3RJSUJny/dZz+TRsS8O3VCXJmnMCJBFKuhHNF9G8EQBAJ1EHOxkiQuqEq9OuEKBFtO475+G+ChkKD39LTLj1r6vTr3AgWk8LJQoBj2dcMUjnPei3hcfwWGkUDHw4KHbMcDtt44OQQo1Cic6hc3kvW178eJL12dDlqfox8+zXxWsFafNKnn/3pa6CokCiYKLni3/wk/jdwj56TwFn66LF8auF4/c7/FAb9a53NK/7CfY++Nz7ze/b2uj1NfPTh46NP+owO/6yd9uTv7ktWm6PX013wLln2vijD7eBY8e4de0z7/7Wd433BkRtPuB1Z7lt5/37IXvy5tvidwrv6Zyh33/8Svf4qi9eaWsWLLT7vvUDt54lPP6eiuFbAABkSVYb1KH2lQMJqyPV8tWHcqhCElI48O1RCMo6VpvKSPC5wgChY+kzegpaPohUKzye6HjtPSZyoTCRHMKl4JAcwuXX/bZ61Gt+8RpGj3JVFb/oPRdUomO696PzbV3UEj4UGtS5f/LXUXj494Ppy/2F4xfCQ8r7wfL7j13pjiUKO349bdF5f/mWd7uAIeF7aRRctEhzkAn2SS7++HsyQkk3QpUEADqZhmx5qhjoF34NXfK2xMOd2qOSUBJ25tUWVSvC9qxOucqRQoG20+L5YVr+0dMQMB03DF7t/Yw6ph+i5lXymdGlqJKRtPL238fPCkO3RBUShYpyJLdbefvv4mcF/v1kFeMjzz3UZrngZ9+P323tuA+8q3mbgeNaqhE+xDx1c0tVRRULv63289bMX2hr5y9y1ZVQeLxyhMfXc0/H96FnT0QoAQCgHH5OieZkeGFoqVa5x0gGiFoo59y1+IwKOWHQQbc15MxXx89ahNUPH1D6HXaIeyyHJsOHwUShxFdLQuGQrUqDQGhAyhApBQJPQ6m85Hn25NDQ0QglAABkCa8MpfkTmtStyoTmTmhJVgCqobDRnuFMEz9SaIcWPU/jzhFUUZLDuTpDR4QqdDqFh2JDuPxjcptiksdMGxKWRkOiNHcjufhhUyFVQlrefzB+tTq1DCZZc2P2RIQSAACyaMhW+Au/woOuLFWrDrafb5GcK1IutcNVcIIlSW3WhHs/8V2fR1fV6iyad5O8WEAY9tDtZA3hqmboljSMHt3mPiiLf/iT1GpJaK6bG9J2rsaAcW3PrUqIfz+kye6dTW34wclnuSUMSKrKMNEdAACk81e08hQE1MmuRTDx4aDaIVIKSJqo7pfkxPw0qvR0ZihQGAq/KxeKcqjUoGbSQokqG9UM3fJUKQmDTDnVEl3x6l133dZq3kcWbZPcTusHnNsyp6MzaQiZlvFHH+HmlWjRlbr2ZIQSAACKUSdaQ6OSHelaBBN335AoJOg4HTX524cAH6z8MLTOpvPrsyrkoVtLBggJQ0QlQ7dCyRsthhPoa0EhJpwjoiteVTMUq73VDAURTcj3i8KIluQE+j0NoQQAgCwKC37RfA1/zw6vFpcE9lfPqibghDc3zKKqiK68FQ7ZqrYyUw0FOj//JnllL3RbWcGj0qFb4i/7m9xXISdrCJeGY2l+iC7l66+gVY7p57QeruWHc4VhRfNP3LCwlPuW+OAQbq/7oRTui9KyqH1pE+qRjVACAEAWVUP8oo68QklYManFJYHDS/pWys15KXMoVrhdNQEICCTngHhpQ7eSwcKv+xsnhu+nXd3LOz4x/EqBQtUOzcsIQ4Iu26v5JiHdcFGyqiUayuVfV6C44S3vanUfE9EQK18lCcONv+dJuIhvr44fXt0L6bijOwAAWcIhWq7aEAWStLu3uwnw8U0I/WvJu53rNb0X3tHdVQ6isKDzhNwwp+i9pHBf3x6d11+9S+t6Pe3u8Mn2qHohyfZo+/A1BR8t4Xn8McPvQtLu6O4/N3YrWRWMtCqJtg1vgiiqtPjhXpronqyQhML31cFX6AipehEOw1JwSG6nye8+UCSvzhUOm0q7cpeE+4eytg+PmdVmtEYoAQAgSxhKRJ1+39kXH0C0TRgsfCc83LdYCAg7/JIVSsL26ByqsoTtqSaUhMfUthK2xYeKcP9i5yaUAKgCw7cAAMiieSRhhzrshIvuVi7aJpxvok5+GEjSAkZoQrBvMeFQLx1f7Sm3w69J9WnCuSYKFGEgUdDwx9e5fWjx5w515mWGAex2CCUAAGRRp1zBQ53xsPOv11UB8J10UafczfEIttNzXw3x9JpfPA3hCl/PChCqRIRtUTt8cHJLPG8kPJ4/VvIcPnyozWqjf93T6zqfp/f0XYThS/R68rvwxwqPBwBFMHwLAIByqUJQTke73O26sz3hMwLoNIQSAAAAALli+BYAAACAXBFKAAAAAOSKUAIAAAAgV4QSAAAAALkilAAAAADIFaEEAAAAQK4IJQAAAAByRSgBAAAAkCtCCQAAAIBcEUoAAAAA5IpQAgAAACBXhBIAAAAAuSKUAAAAAMgVoQQAAABArgglAAAAAHJFKAEAAACQK0IJAAAAgFwRSgAAAADkilACAAAAIFeEEgAAAAC5IpQAAAAAyBWhBAAAAECuCCUAAAAAckUoAQAAAJArQgkAAACAXBFKAAAAAOSKUAIAAAAgV4QSAAAAALkilAAAAADIFaEEAAAAQK4IJQAAAAByRSgBAAAAkCtCCQAAAIBcEUoAAAAA5IpQAgAAACBXhBIAAAAAuSKUAAAAAMgVoQQAAABArgglAAAAAHJFKAEAAACQK0IJAAAAgFwRSgAAAADkilACAAAAIFeEEgAAAAC5IpQAAAAAyBWhBAAAAECuCCUAAAAAckUoAQAAAJArQgkAAACAXBFKAAAAAOSKUAIAAAAgV4QSAAAAALkilAAAAADIFaEEAAAAQK4IJQAAAAByRSgBAAAAkCtCCQAAAIBcEUoAAAAA5IpQAgAAACBXhBIAAAAAuSKUAAAAAMgVoQQAAABArgglAAAAAHJFKAEAAACQK0IJAAAAgFwRSgAAAADkilACAAAAIFeEEgAAAAC5IpQAAAAAyBWhBAAAAECuCCUAAAAAckUoAQAAAJArQgkAAACAXBFKAAAAAOSKUAIAAAAgV4QSAAAAALkilAAAAADIFaEEAAAAQK4IJQAAAAByRSgBAAAAkCtCCQAAAIBcEUoAAAAA5IpQAgAAACBXhBIAAAAAuSKUAAAAAMgVoQQAAABArgglAAAAAHJFKAEAAACQK0IJAAAAgFwRSgAAAADkilACAAAAIFeEEgAAAAC5IpQAAAAAyBWhBAAAAECuCCUAAAAAckUoAQAAAJArQgkAAACAXBFKAAAAAOSKUAIAAAAgV4QSAAAAALkilAAAAADIFaEEAAAAQK567IrEz1Gh7Tt32coN22zJus22btNW27Rhle3Ystb61O2wkf0bbFj/RmtsGmC9m4ZYXX3veC+zXbt22paNK23LhpVuvWnAKOvVp3/0rIft3LHN1q+aY7t27rQePcx69x1mvRsHR29FK7bLtm/bbOvXLLWFK1bZkrUbbdO2ndF79dF5BtrwoSNt3ND+NrBPr8LmMZ1v66bVtnVj1L7tW/WK9axvsIY+g6yhcZD1rKsvbOjssjVLn3PP6huarLH/yOj9XtGrZpu37bBFa7bYig1bbev26LxRexvqe9iQpgYbNbC3NfWqa3VeAAAAoByEkirsjL6y5eu32V+eXmZ3PLnEHp63NgomW1xHvVddTxvRr8EOGT/ATp8+wk7df5iNGdDb6qPX20t/qIVrNtvNjyy2P81cajMXr3cBYfuOXda7vqeNG9xoR00aZGcfPMqOnzzIBjT2srqe7U8JW3fstCcWrLObH11sf3t+hT23dINt2LI9eqeH9etdZ3sN62vH7z3YXhud9+BxA6yRcAIAAIAKEEoqpG9LQeDGhxfZj/4xN+qgr3cVkyRlgb2G97UzDhhp5x4yyqaN7u868O2h4PONO1+0Xz200Oav3hy/2lp9dGIFonMOHm2vOmCETR7a6AJLjypTwo7osz0wZ7V995459runltp6F0ba6ht9tuMmD7Hzjxhtp+w7zEYqiNUgEAEAAGD3V3dlJH6OMmzevtP+PGu5feOuF2zWkg2uapJGr2po1/NRaJm7arP1quthQ/s2RMGkvqoqgsLANffNt+/9fY4LJ1mUjxav3WrPLFkfnX+r9e5VZ4P79rI+vSoPJsqrL63caN/92xy79YklmYFEtu3YZS+u2GjPL9tgazZus0FNDTagsd597moDEao3f9FyW7t+o/3pnkfcMn/RCpv57Dy3TNt3QrwVAABA10ClpAL6qh5bsM4+c9sz9tdZy1wAKIeGdE0b3dfOOnCUq16oatKnvvzhXKrE/P7JpfbJW2a5Tn+5BkWh4NAJg+zsA0e6YWR7DWuqaDjXqo1boyA0z66+5yU3l6Rcw/v1thP3GWKvPXikHbfXEBs9sLf1JJh0OAWRm26/1/718DP2r4dmxa+mGzd6mB1z+P523hnHuUcAAIA8EUoqsHrjNvvc75+za/81zzZs2RG/Wr6xg/rYsZMH2+sOG23HR531Yf0ayqqaPL5grV15+zP256eXpw4VK6YhCj+ThzbZK6YOtzOiQHRMdH5VTUrRPJK7nlnhzvtYdP5K/1vS1FBnB44dYKdNG26vjs67/8h+bhgZOsbXf3iLW6qhgPLVz7ydcAIAAHLD8K0yKQz84sEF9v2/z7FVUTipxrrN223Oqk324vJN7qpZg5t6uaFVxaoIS9ZusR/eO89uf2KJbdSVtiqkOSEaxvXSik02Z+Um27Zjh5vv0b9PeMWt1hRA5qzYaN+4+yW7b/bKioOQaDjX0nVbo8+60X2GftH5xgzs44ZzoXZUETnhtR911ZGkcw6bb7MWDYjXsmmY10133OueE0wAAEAeCCVluv+l1fb5Pzxvs5dtjF+pjjrrS1xnfYO7klbf3vU2KqOzvmX7TrstCiMaQrU46ti3p6S1YesOd75nFhfmfPRvrHfhJC0Q6cpaP/jHXPvVIwttfRUVIU/zbdZu3ubC0PxVm2384EabEC0M5aoNVUY+/NmfxGutjR28yS495bloedau/+fk+NXiFGw0/OuVJx1qA/o3xa8CAAB0PEJJGRQIPvu7Z+2+2asyJ7ZXQsdYs2mbvbhik82OwomCyuQhjW7Ik6ezPDR3jV1994v25MJ1VVUrknTp4JVRIJm9bIPNic6tbKDLCCeHc9357Ar7yl9esMUVzCPJolZv3rbTzUlZtn6Lnbr/cOsbfE5UR2HkJzf8OV5ra93mXlGQHuqCyTmHzre/zhrlXivFT44nmAAAgM5EKClB9x75zj1z7BcPLLBN26qvGiSps65KiKoXzy7Z4ALKPiP6uhsRKiwsWLXZfvD3OfaHp5fapq2VD9vKovNu3LrDXRFMVw/TFbUmDOljA/voqmA9bPWm7XbZjU+6e6Ck5a9qaxwKVQujYLL/qH524BjdKBLVUoWkWCDxFEIWrG5yw7hePnUxwQQAAHRZTHQvQhWNP81cZp/47Sx3id3kFzVCV5maMthG9G+5W7unb/X+OavcjRVLUQhpaqi3U/YbatdceIhpJNeNDy2yK29/1hatbX0/Et3zZGR0Pk26v+/FVW5oVLU0jEp3Yn/PiRPtncePt769e9llv3zCfvbvBbYj/q+Fgkr/3nW2bxSYjpg4yMYP7uPC1KwotKiSo/ulKLiV+1+isw4caTdecni8hkppDskF7/1yvFYeP4xrwapGu/mR8Xb1nfvE7xSnCfD/uKWycwEAAFSDSkkGZbXnl26w/73zBXtgzho3YTzphL2H2OWn7mWnTR9hx+41uNVy1ORBbh7Fg1HHvRy6Uu9ro8Bx4pSh9uSidfbFPz5vz0ZBKOmzZ+5rrz10tB0wZoDNW7XJZi5qu03ZosChOS1nHjDCHe+Wx5fal/802115S+qjdDR1ZF9734yJdvFx4+20aSPsuOizHTZhoAsoWnRFrblRO3T/lnJobstlJ5c3xwFtaVJ7pVQtmTp6rVuOmrwieqWH3f/i0MKbRahiomDCfU0AYDf3gRlmc542mzTVrG/pC6Rk+m7076iNa6PjTItfiCybb/bxs2pzfNHxfn+N2U3fMrvnN4Vz6vH315o9+Bezmf9u24ZKlDq+3te4keHjCtuXovZ89s2FNk07Jn6xSmpLLb7DLopKSQZdserb98yx7/3tJTcPI82bjhhjnz1rfxs7uI8LMSs2tGy3ZfsO+8qfX3BX6ypFFYuXTx1m37ngQHcfkU/dMstuemSRq0Ak3fOhY6OO5WBbvn6rff73z7mbKVZLN3K86Jhx9p8v38vNm7n0l0/aw3GIUvVm6sh+9sFTJtuZB460wX0bbFMUKHQFsZ5RGwc21lvP6B9K3TDxf/8621V2FDhKGdTUyxZ98RXxGirRnsv+auL7X//zznjN7Oo79y2rYjJuZH/7x23fiNeK+9dDba8AluWYw/eLn+1ZdCEBOe/M490jAHQJF+xdeFRHW9X4aUcX1itxz68LnWYd41v3xC9G1IlX6JH2HF/HuembhfOUQ+eacW60vK68AHFT9O86hQ8XOspQ7mdxoeRNhefJ76YSCjYz/1X4PBWOmOguCCUpNm/bYb97cqm72tbTi9elzq2QMJSow/71O1+I3ylc/vevz6xw9xgpZeqofvalc6fZjH2G2A/+PteFjdWb0oNQrUJJfRQsjt97sF111n42ZmCjXXHbLPv1o4ubg5BuvPjuEye6StCgxl7uEsH3zl5lTy1cZ029e9qREwe7e55sir6rn98/375590su2JQydVR/e/iTJ8ZrqMSko94eP6uO5pZ84dzH4jVz1ZILf9z2VxsFGE2OF1VWJux3qk066VtuPY062llXAUtTGBb2pXhtz1AIlLe65wokui8MAHQZPpRINR1nH0i8z/y8pbMehhKp5vgKDAok1dD5FE7O+2D8QoLa992PFTr81VD1473Rv9N0njRhKJFqQoUPJNKeYNPFcTe7BM0j0fyRnz+wwN09vdzIpitM6TK6fvnZ/QvccUrR3c/fftwEO2bSIPv78yujfedkBpJa6REtujzvm48cZ3sP62u3PLbYXXErrMzo0r1vOHysCyS6Opi+j6/8ZbZdHwWQH907z778p+ft/9zzuXbL40vKbvPLouCFyvlf2Nvj5ofHucVT4FD1RCHEX0L4+nf8y72mOShatM3ONQ/Fe7Slu8hXEkjkvDOPi5/tGfQd+UCSpOrSCa/5mFsq/R4BoEOok66OdLmSgUSGj42fpNDxy61GiDrk1QYS0bm0v4JNkj6nAlO1gUS0r9pY7meq5LuVMJBIJd9dN0MoSdCNEW98aLELCGnDp7L0jL7JsQP7NC+aHK7OfDG96nraK6YNs1dNH2GL1m6xr/55ts1e3r77oJRD80jOPXS0nTZ9uD06f230eRe6yktoQFO9TRnR1z3XPVX+Mmu5u0qYtlNF5ME5a+wbd73oQskj89a6UFaKJtWfc/CoeA2VSLs5YjVufqT1Lzl+WJcPIoU5JwWaGK9hXqd8fn83wT7N/IUt25fr8kteEz+Dblqp0KJFwbMW4RMFP7/9bvvSD37VvGi9s4Xn78g2lHOervB9lKs7tXW3VW7HNy2QSFbVwFu2IH5SQrJDnqTzqFKh6kOp+RoKJmFbkxWMNK7KEh271PH1fZUbTLRNud9v2udXW3ZTDN8K6LK1Nz280K664zk3XKnUFxMO31KA+dPMpfE75oY6aWhV9gTwXXbM5CH2mTP2tcMmDLAv/GG2uwSwhkMV097hW6qSnDhliH399Qe455//w3N2xxNL3B3mQ6po/OHSY9zckt9F73/kN0/bC9F3EtL+5f6XRzeHvPSkyfbxV+5tAxpLX5YWrZ3wmo+6jmt7+GFZCh9pFEI0Kf7+F4e2mW+iIJEWJvRLf3g1MA3NKjY0adyYoW6bPYn+bqqEeOHwrQve+5VWgY+hXbVz9nuusn88NDNeM5swZrg9esvV8VrnGHLkG+JnBSccPs1u/d4V8VrtJM/zprNOsqs/8954reCQ11xqcxcui9fy+T7K1Z3autsIh2+J/ne9VOc3K5Ccd1nroVLqgIfDtyQc3pWlWCBJniOk86ltWdUV7avPlmyTp/ChbdLa5wJFFKj0udOChULMZ/6vdShLCz8aflUquGV9/nK+u26KSklgwerN9p2/zXFXtSq3s+31qu9pp+w/vHmZNrq/m7eRZdygRnvjkWPt8AkD7bePLrGbH1tU0/ugZBnar8E+/Iq93d3c//DUUrv72RVtAokTfAFDmnpZ78QNFqWS7+jkfYdFn3eM9e9DIKmU/yW9Ui6EHKYQ8pzN+twdzdWQNJ/4zcF26tdOcXNM0ibAl1upGTdmmJvEnrXsaYGklMvfeXb8rBDoLr+kZR0AuqysQOI69BlhoRI6flqHXMdXh77YOdTZ1/vaLq26ocns6vCnURhRqMjq9OvYek/baNskBRXNT2mvrEBSzsT6boxQEvjNI4vssflrUy//W8qOnTvtyQXr3PLEgrXurulZVZKGKMAcv/cQd1WrJxeutev/Pd8WRoGoo+nKXp88fYodF537sflr7Jp/znNXGUujr2B79Jlk6pj+NmlIo7vqlqe5JqdNHeZuhNhLY9eKmDK8r7uk8L4j+rnKCypTyVWt/NwQTWhXCNFjGERUDVElJKT1cK4JOo+Cmib9qzqix1qHNg0H0yT7aoMtALRRLJCos14LaVUOf/xSFQZP22kCejI8uGpHSpVDFYhyA5UPPtonSWGi0nkjoWKBZDceuiWEkoBCSSXzSEIbtuyw9//yieblp/fPd8PB0uwXdc5VregThZObHl5sj85bY9tLzD9JUj7Q/pq74pfGlGpG6JVTh7vJ66uiIPKFPzzv5q9k5S9Vi3QFMhnQp5e7Stcp+wyxvg11Nripl5136Gj7wjlT7QdvOdg+8+opbh5NmqZo+/MPH2Mz9hnq7mmCjqG5IAojvhqiConn54aoCqJqiKoioeQ8kzTzF9Kh7SgKIh1xiWANDVMQ0fE196eScAsAqdTZ7uhAotCTDA0KAdUcX/upI59WMQlVW4HQPmkVk7TvqBx7cCAReomBJ9txI0KFipmL1rnl6eg4mrieZmjfBvv4q6bYPiOa7LePLbbfPLrINpZxf48kzcv4wMmT7a+XH9u8fOXcqfG7bU0c2mhXnbmvCy//98BC+/dLq4tWhBas2eyuyrVClZQoAE0f3d++dcGBdueHjrU/XXaMffJV+9h+I/u51xsb6ptvuBhSZeWU/YbZBVEoUWUFteWrIhqapatm+YqIDyFa9v/0GS6IaEiWr5C4uSPR4iUrJ7sDdcDbWxloz/7+/B1RndCxS30+vXfeGcdFj4ULEfzr4cK8lY5oT3ejSdOXfva7bt6C5p1o0WtzF7XMYUjjJ11re7+vjlPJJGzNcdG+WrRvGm2TbKOf7F2qjdXQeZLnCufiFOPbqf3896H9y2mnzuH39eeu9DPqXOEx/HH0WiV/F5Qpa2J4LQOJaHhVkjrl1fIVkyxqf3s6/GmhR6Gq0mrJHh5IhInugX6X/76ioVtvjDrbnz17Pxs7qNGWr99iEz711/iddD169LALjhhj33z9dHt47lr7+G+fdle/quRPcLcmuk8aHK+19penl9rZ33swXmuhQPDV10218w8bY/98YZW9+dpHbEXialtp+vept3ccO97eecIE9xlV6dDwK7V2V/Q9rY/C1N+fW2Ff+fNsd+f68LvTKK2po/u5CwGcNm140fk1KK5wH5Afu+dpk9UVMG5+ZHwULoaUHTAUZDwFl1KOOXx/uyHllx91jpMT3TWvJMsxh+3bPGFel8D1nWYJ30sKtx03eqgb7qRzf/1HrS+1q4pO2PH27fnqZy52z4vR8fxlecNj6LNr7oeGWhWjYVI33X5fm46/9s+azH71NXfYo0+13N/ozeeeZCcfd2C81sK3Le3YEh7/pft/7LbXtpoLpO9L59RrHVGR6arUOU12rjXRPKvDrfeuvuJ9NmH08PiVAnWSL73qO0U76pqI/cYzZtjH3nV+/EpBcgJ6KG3Su+tM35bdmdY+H73kfPcYSp6nnInuonYnX/N0jI9ecl6b70NcGLkqPVR5V1/x3qid01P3T/vbeGltSk501746RilMkK9AqYnu7Qkk6qBXMtE92Ra1oz2hxNO/w1SFSSpn0nkpad+PKiga4pX2XvKcBBKHSkkgawhSFlURdDnc+19cZf+KllIOGNM/6qTv657/e85qe3rx+ooCiTy1aJ07X9ry8LzC3dhDferrok7sKDtpX3XIetiVdzxbViAR3QDyJ/+cZ5fe8KS7bPC/XlxpD0btfuCl1fb32SvtW3e+YJ/47Sx7JGUezoDGejv3kNF28r5DCSTtpE5lc0Xk7f90Q7X8cKy0Skglaj2XxHWEow5y1hKGEE3qDt/TvTzS7livYUgKZn67884odKzTzpXstPttdPUrP7ciSa/pHApXep7cRvvrvaz91dnX/mp/+vvpl1P2/vK3R5uXNGHbkvznTlKA8oFEQS+rbXuaYsFC7/0iEQj02iFnX1p0P1En+ks/vMn9cl8NBR+FhmKBRHxnvFYVk6xAImqLwliSglOpQCLaJvl9SrFAIsXaJP47KIeCImqgsyokkhYaajWxO6tz395AImn3ZZl5f/ykBAJJM0JJ4OX7VzbJ9B8vrLLLbnzSVR4uu/Gp+NV0I/r3tm9fcKCrODTU1dnUkX3t4HH9rbFXXbxFea68/Vl3vrTlm3e9FG9VoCxw2MQB9tajx9moAb3dvVRePnWYHTp+gKtklGNtFEzujT7np26dZW+55pF4edjefv1jUdB/yc1LSc7Dqa/raSfvP9zeesw4N6cE7XP0tL7RlzqgeU6Iv0JWNSFEVG3xyplPIqWqDNXQMZOXv1XnObxXh4JA2OlWtaZYxUKVA1UD9Jhsc/LY3oc/e02bjr2rsJSxvzr6CgzJ/dUGha60dlRCgSTt2FpKHVff7TGH7e++QwW5rCoUWihY+A6/HtM6v/r1XUuaX9xxT9EOt/ZTBULL8Ye1VDvU+U92xguVm/e6bZPnq2UwEZ0r7TPps4RBS+vJ4KT9PnbJeW5JVnD0fYbfR7GhYVltSLoh+o6T/PmT31eycoUqdGYgyVKrUJIWHGrV6VewSYabtMn0SQSSVgglgQuOHOM67+XSXBDdSFCXEtZjFoWDdx4/oTkM9KrvYadGAeiqM/dzlwUeGZ1TQ7vKsWz9Vne+tGXlxtZ3VR8/uMkuPnaCHRadV1feUsXi0hmT3ZCqVx8w0t1EsRzbdux090VZuGaLzV25yeat2hw932xrNm13d8BPmjK8yS4/abKNG1RZ5QnpejSOtweXHV11CEkaO6jlfjPlHvOYw4oPXQqpI565JI7jO+8h/6u+KhB67rlOdpFAovdv+O5Hmh91NSsdO+y8+2N7ydCjNmo/vygEFdtfgSak/TV8Sm1QCFA7bvjeR+J3K6PPH7ZN7VB7dGwtae1L0veldpQaetbd3b9wvv1y5uOtlqUbN8TvtlBnVUOmVj7wS/eY3hEv/MD05ahDnaSOs4YDueXWq11HOKRg8eUfZldLNJRJw6q0+A6zwkWyo67jqn1vOrMwDCvZVp3Ht7M93OeJPoeOr8+U/Dxy78MtbUuGNLXJ7Rd9Fi2uzVEoCIXfh0JKkrb3fw8dKxlskuYubLkfmGh7f37/fek4OibaKY9AktaRr0UlozNUGkoIJG0QSgKHTxhkl5ww0fqV2Vkv1+sOHWNvP25C8zAm/X9VSI7ba7B99JV72ydOn2L7j+pb08vl9muos1cdMNxO3U9XvWqpVgxsrLcTpwy2q87a195z4kTbJ75re7naRpDWFH4uO3kvO2zCwCiM1fAD7eGOOaL1FbPaw1dKKhm6pfBQDnXKXUc8Y0k7jjrN4euu+vCewpAlT8cttw2hwrGPi9cKfNDRecLQU+j0f6RVJ1+deQWAkMKCf2wbGqoLIGnCzy9qRzJc7O5hoxLLohASLmk0R8J3evV49Wfe556H7nv4afeY1ulXx9lTwHhj1KFOdqIrrWCkDXHygUVzN7QoICUrKb6d7ZGcQ6PzJoOaApM+U9rn8sOjXAVF80w++90235sPXGn761zJuS+uTYk2FKPj+0nuOn+xagwqlFZZkHIqALVSy0CSdqysz1iNSo5V7I72nfn9djGEkkBj1JG/6Nhx9v4ZE21MhfNLshw0tr+9d8ak1ApMr7qeNn5wH3vLUWPt82dPjR7HuU59e+kYCgUXHzveVWGSFFL2H9nPLj1pkqvWHBuFo1rN+7jk+AlRCBvt7uCO2qmmQ17K/S+VVyU578wT4mcdJ1nRCKsRPuhUK/ndhfNaQsnw4qnjn9Y2f0UrL2v/aoSfX3R+Akj76Zf0ULHObzIEpG2bNom7UMVoX6dYHWxNXte8DC1pc02SFYNK6fOktV+T05OyKjMarqZ2qoLi25n83ry019POldamkEJLko6tRedXNUbt0XdIOGkndeI1ITtJnWZNXO+IznNatUEVm1pIm69S7ryPclTSTgUYXREsedUu0T1abvpGvLJnIZQE1I0ePaCPvedlk+zzr93fjpo0sOy5F2n69OppFxwx1g4a0z8KCvGLCaom9G2od/NZVDH5n/Om2/B+DfG71RnRv8HeFwWOaaP6Z1YrFFxG9u9tr5o+3L5y7jR71wkTranC+S1JJ0wZbB88ZZL178M8klordEoLV1pqr7GDKquUJIdXdQRXZcgY5tTe6oOOHYYKVTfU6U/OD9GVszQhPm0JQ0LLZXZb3x1f8zdqRfcVCdUy8OyedsWPtVPur/UTxoyIn7Wo5Jf+eYtbB1BJduBVjdEwJ82Z0OKHXLWH68inVC/Gj0ofDjhhdNvPmRY01E4/v0PtrGYYVdpxPYUWHTdZoUrSMS797HcqrlwhoVgw0fCjWgeTWlZGylHL9iePVeqz6H2CSSuEkgQVDNRZP/vAUfatNxxo5x022oWLSikKvDEKJG8+apw19S7dSVdlYeKQJnvTUWPsJxceYqfsN7Sq4Vyqvrz+sDH2iv2HW32JaoWO3ycKIoeMG+CGkf3s7YdW9VlFQ94+8oopbh5LFc1GGZLDiKqlOSXlBhJVScIOfUfKCl5pk9MrVewyxZ6CR9aSJnlDyVpWMpJVmM76G3RnI/v2a7X03L7TVO8Ol0okf7FXJzftl/e0Kobft5xwctxhbe8v5YaWBZ16BRANc1KlR0upakK5sqofSWpPWgjQ5/Pt9G3182WS7dT+ye9D50+GhnJChI7r5qBE53TfTdQGhaFkGwt/s/bPvdnjdWYwSRsClVbhqEZaJUNtr0UlptqrhhFMWiGUpFBnvamhp00f3c++fv4B9qVzprk7mVfi6MmD7e3Hj7fh/RvK7qQrEPVrqLcZ+wyx773pIPvgyXtVfPWqA8f2s4+fvk9F+6lqMmJAb1etefiTL4svH1wZhZrj9hpSk+FnSKeOaa2uoFTuVbc6o0riJSede5r34edxVCs598MvIQ3z0sTxUov/TpJBJyu8VIMQUpmjxoy386ce2Gp5y1NL7McbejUv39hY2Q1cLziz7eVk9cu7gok6zlrSrs6VnOgd8vv656IKRNvO+syog916aJPmbGhIUlqnPbm/gpKOEZ4vjeaq6LjaRo/uql6JKkV47OR5tO28eHsfQPxx9FiKq2bE94AJ21CKttHcEZ1TQcRPcE8b2uXbh3bqrGCi8yQ76AoN7Q0O2j8r3NQi9KTd8LHcyeoEk2aEkiLqeva0IX172cXHjrO//+fxNmV4X1eJKGVovwY7+6CRdtj46oZ/6RzjBjfaFWfsZ998wwG274i+JTv7unrX4L4Ndu2Fh9qgxson6uvoOu+koU12wzsOs6+eN92aeteXbL/a9frDx9j5h422fmVUhNA+6ji3dxjXJ35zcFlX3VIHvLM6x8krbYXU2U+7cWC5svZL+2yqdpRa/H66B0goOeSqPZJt0z1H0LkUCtJ+eVeHWPcuSbt/iTrt4cTttDkT2s/Pw1BHXOdIu5+GP0c4v8SfPxk00s6j7dy2RTrlhVDwXXcePSY/j4QXA1BVIhlMNIcj2U4dx80xSQQTHSu5v7b136n/jMXomNpH59X5dF7/WXWMpONTvhtUqbOCyYxz4ycxHTf691G7FNtfoaQ9wUT7pl1Fq5JLGRNMHEJJGdRZ339UP7vnP461d584wVU/0iaGq4OuTv17T5xol540uV1Xn9KefXr1sDceMcZueOfh9oqpw21wU6/UIV2qiugqWjdG202p8GpaSTq8rtB1yXHj7foLD7HDJwx0YSN5Xq3qju9nHjjCPnTqXjZhSGPhDXQodVY1jKujw8JXP/OOqANeXfhRCCi1hLSevNKWLncbfka3zXu+Eq9VJnnZXj8/IwwYomFiybYlhTdQTF7eWHeXL7V/uappG2pLv8JXciWoQiBp/Uu9uyN6kf390CI33CmjwpLspGs9ebniUuepluaGhMFM34kCVNq50sKEQkYoK4BVIvnZdV6FlLRApfMlgyXaqTOCiTrzyc55e4JJOe1Sx7+atme1K3H1xLIQTAgl5VKnfEjfBvvsmfvZ9954oJ02fYQdGnXYp43ub9PH9LfDJw50weEnFx5sHz9tShRkUtJDFRRspkaB6GcXH2r/9ap97Pi9h9jB4we61w4cO8COnjzE3n7sBPv1uw53lxiuzVnNGup72qsOGGE/jc77vpdNdlfo0vkUzg4cN8BOmDLE/uPUve1/z5vurjDG5X87jzqrN3yv46oYCiT+ilW+M1xuh1jDpNImiodLMlyEoUGBxF+WNznxXW1QxaRc2j5580EdNxwCl5xArrYlA4DWdd5JR72jVTVH31H4N9B5CjdifKZ5/8K+rUNRuUq1zbcrbCtqy89dSLt/R0jvp91jwwWblOqAF17WVxWWtEpEkptEHlRjpNR50qitWUFIx3GfO740cUiv6VylOvt6P22Su/Yv9jnVpsyAtmiZCzWlzq1j63vSedABOjqY6PjnXRavBFSRqOT4vj2pVYyU0KNtK+n4a1tdhSxJ7a/2PiOlgkl7K0ZdXI9dkfg5yqRvbMuOnbZ07RZbvmGrCwKjB/S2of161yyMZFm/ZbstWbvVVm3a5u51oittDW7sVXJSe3vs2LnL1kXnXbh6i3scGJ1v9IAGVykhjORHnVF1StPmYVRDHezCvTBaKiSqDPiOtw8qIbVBneVKOsaak+GDQRgafBAJO/q+4x3y+6e9p30110OT0NPapCFpqkKE0u6aXkxYxanm8+t79BctuPqaO+yr320Zi3zN1y+3k487MF6LOnZRiKvk2KKbN8Ls2+//sm3YVLjSnPfRn7TtpCaHGGmOR1qnVx1i/So/d9HS5nkKGhpUqoPs6Zd8v+/4qNOcdR7xv/rf+9BT7upcmgzv554ogBTj99W5NKzLb5/1OZPtCvcpJa2dUu4xtL/2lfDcvk2h5OWc0/4epb5XFHHB3vGTWDk38FNHPqtTHoaWtO0+8/NCRaQYdfrVEU9ynf5zo/8x/WD8QoLOpwCTtq8o8Oizffdj2YFF22S1T8fP2leSn03zWZI3odT3o8+Rpdg5yvnuuilCCdCNqcNamI/RMqyoGrrKVvLqXuqoay6D6+iPHtoqrIR07qz5IGl8pzm5X1pgkOR2ao/aqs+bDCVZ1PbL33l26vGlEO5aKhxZwkDhaT/tX2xftdm/H4ayUqFEdGwFsCxqU/g+oQRAxaoJJZIVTMKOc9o2OnbalbbUUdd+eizV+Zfm7aNj6Z4jxbYVBQ5/N3odv1jlRcd2S3Tsco+fFhiqCSWS9fnDz7CbIZQAuwF1eCsNJ+ooq0Orxf/yn/TAY8/Z6BGD3fOsbaScDr3oGD4YhB3p5ByKpGSnXNvqfGEo8fv7diiIKEydd4YuDpAeRkL6DLoUr+4/4istvr2aP1Kqjfruw339+RVCNIQrrS2/+d19tmPHznjNbNL4kXbkIfvEay3S2ub+dtHxRHNywrADABVJhpJyOs1eWuhQpcFXMtLeL0bn9ZUQ7Vus6lEJBaHkXA8dvxZDziSrgpEWSm6YHT8pQe1KBhN9P2nD53YDhJIa0le5a+d2PSu8YD2sR8+e1qNH26tS7dq5I9q+pTPSrEe0Tw/tkz3dp2Xf8DyajN52n/A8Pet0Va7CcKuWtuqUhf39ezt3bHOPSYXtKr+yFzqXOqyFTmwhKIT309DQJj9Bu7t3YJPDt7pyp9wHHADoksJQUk2nNxk8wkpL8r1yhcfIGspVDn0eHSstMIja157gU+r4yVCSFo6KSQsm5YaaboZQUiM7tm22Davn2ZIX7rOtG1fYzigI9Ord3waPOcgGj55uDdHzqFfvtt25Y6utmP+oLZ/zkFtvFr3f0NjP7TNoxH7Ws153dm+Zs6FwsX3zels+70FbvXimbdu63gWF3o1DbNiEI2zAyP2tvlfLVbB2bN9sS2bfa2uWPOsuaTDlqLdar4Z+7r2NaxbYvJm/s53btlvfwWNs9D4nWa8+A21nFGKe+ccP3Dahuvp6axo4xkbsdUK03QB3XiBP3SmUAECXFoaSaucshOEjrLRUG0qS4ajS8KD9VXFxQ8XithTj72WipRw6pp+fUkwYSpKfqVxhMKk01HQjhJIa2LZ5rc1+8P+isPCwbd+6znbt2GG7ov/07FkXBYsmGzRyH5ty9MXWNGC023771o0276nb7KVH295sR9WOXn3626i9T7AJB57jnov+TOtWvGjP//sntn7VvCgEbbJdO3e6zKLz1EdhY0gUZvY55mIXGmTr5jX2wgP/Z4uev8eFiGPO/7b16Vu4t8LqxU/Z43/5UnScLVH7ptr+J7zbGqP2KTDdc/1b3TYhZZAePXtFn2GUTX3ZpdZvyES9WngTyAGhBABqRKGhkg58Fh8cwkno1YYSCcONp+Opo69l2YLCuqdtpx1VeCwVFrKUc/xKvicdR1fNKjY5vxxqhwLZbhpIhFDSTtu3brBZ//ieLZ/7b9uxfZsbBlVX38f14nft2GY7ok5+j+g//YfvY4ef8d/Ws66XCxRzHv+tvfjIje4YdfW9m4dF7dy+xXbu3O6CxaRDXmfjp53hjrlx9QJ79E+ft83rFruA0jPavkd0LA3h0nArDdPSdkPGHmIHnvKfVter0YWl5/59jS16Tldd6WHHX/AD69OvMIRk9aIn3fFU4VElZ+qJ7y+Ekp1b7a6fvMFtU/gsvQufJQpAO7dvjs5tUSCZYIef+fkoCLXvnihAexBKAADYfXCfkvaIeuiLX/iHrVz0RBxI6m3ImANt2ss+YAec8mEbO/3V1rtpSNSnr7N1y1+wtUvTLzs6buppNn3GZTb9pA/asAlHRtv3dIFi7bLnXbVDoeOFR26IAskSF0h69e5nQ8YfalOOfKvtdejrbcDwfaPw0OCCyaqFj9uCZ/4cH7l9+g2eYPsefbEdcNKHbK/DL4iC0sDo1V22ecNyWxmdBwAAAKgFQkk7bN+2yVbNf8y2RwFC+g/b2w489SM2fNJRNmT0ATY5Cgzjpp1ug0ZNc8uyufe77ZL6Dp1sQ8cfFi1H2JSjL7KedZpLEh1/y3pXidm4ZmEUaJ6LAslOF3xG7XOSHTDj8ujYr7IJB51jB5x8uQ0cNd2FmZ07ttuyOfc3T2JvD4UQzW8ZOv5wm3DA2danX+G68zu3b43CzxPuOQAAANBehJJ22L5lQxRMNrrqhUw+9Hyr69VkO3Zss/UrX7JVCx63vgPG2Jj9X25jo2XgcF31qO1ouW1R+NiyYYVt2bjC1q94KTreDve6AoiqLGtXzHZDvkSBZez+p1ldQ5Nblz79RtjoKTPc9jr+lg0rbXN0vPZSCNIckx3bt0TLplYzSHrwXx0AAADUCD3LdlBnXZWJgh42cETh5nI7orCiIVSz/v5tm3Xv9+3Z+37olmeixU1OT1gx7yGb88StNveJW9w8Ew3XUvhoGjjaGvoMdFfc0lWxRJcY9vNCQn36j4jeiy89HIUaVVjaa9vmNbZ8wSO27KV/2aLn7mkOOnW9+tjAUek30gM6m+7XoRsvMp8EAIDui1DSDj3re0XhoRAEVC1RdcTrsauHq4ls37bZtm5e6xZVRNIqJasWPGYLnv6DzXvydlu34gUlD+s3eLybtF7f0BQtjS6MOLt22paNqwrPYzr31g0r3XuicFIfBYe22p67mE1rFtncx2625x/8P3d1sS2bVrmJ+v2GTLLBY1rfdRrobLoJ4T9u+ZK7w3o5N0cEAABdF6GkHXTPj/re/d1cDl0yd96Tt9pWBYZofcj4Q9ycj76DxkXvFQY+uWpG9F5S775Dre/gCYUrXUV0iV+tDxi+T3SsHtExJjRf6UpVlKUv3GfbNq11cztUrdm8bqktm/uAu2qXu29J0+BoGRrtG+0Qn0+vb9m42s010aL5MJoYX3ivVxRX2l7eV8O3dPUwXXVL7W5oHGSDRh9gEw86x3r1Llx2GMiLbkbIDQkBANg9EEraoaeGMY3Yr/leIroh4ouP3mirFj3hqheqWOzYsSV6ro5/Txs3/dXNISE0asoM2+eYt7krdyk8aE7J5vXLbVN8ta1+QyfagGF7Re/VuUCx6Nm/2rynbrfl8x+25XPvtzlP3Gwro3OrUqJhX5qc3jMKOHreq6HJtUNVkgVP/97WLJkVLc+47QuhpIc1DhzphmQl9ek/3Mbsc4pNmH6mTTjgTNv7iDdFy5ttyNiDXTsBAACAWqi7MhI/R4UUNHTJ3y3rl0YhYqmrWmxYvcDWLo06/VEwWbN4ZnPlpP+wyTblyItcNUTBQuFANzCUsVNPc3dk1x3Tl8990LZv3RQt662urne0315RsOhr9b372brls23b5nVuvsj6VXNt9ZKZbjL92qXPugn3mug+aPQ0m3TI+dard1/Xvu1bNrphZbqS18Y1i2zN0lm2Yt4jtmbZM64K0tBnQHT+V0ahZ4rbXoHopUducu3qN2SyTTz4tVFYOthVbQYM3ctdgYtAAgAAgFqiUtJOvfsOs8mHvsFGTD7OGgeMdIOgdB+PzWuXuKCgKsrgUdNt32Pf4e4v4ql6ofkZWvyfof/QvW3klBkuuGgo1qqFj9m6FbM1jspdUnivw99oA0bs4wKKjr1p7WLbFIUhbdvQNNjNQZly5IXNl+5VyND9TEZPOdn6DizceVShacPq+W7oV2P/kTZmv1Nd+zRkzPPtUrVFQ9T0GdT2nvWFSxUDAAAAtcQd3dthx85dtm7zdlu5catt2LTZ1ix73jaseMF67thggxvrbXD/ftZ/yFgbNGKq9Woc2FxhUIgoVEqeduu6r0nfQeNdiNBk+IXP/Nld1UvbDxo93QYO39eFGM3x2LJxpS2b/7gtWjTXVqxbb1t27HKXIR44dLKNmXigjRoy2Po26FLC7tBu+NeundvcBHoN29JNGUXBRtUR3VtFE+mj/yq4112l5NHfuOcKWcPGHR5t29dNkd+6faet2LDN1m7aZtujzy696npY/971NqRvg/WuL8ytAQAAACpBKAEAAACQK4ZvAQAAAMgVoQQAAABArgglAAAAAHJFKAEAAACQK0IJAAAAgFwRSgAAAADkilACAAAAIFeEEgAAAAC5IpQAAAAAyBWhBAAAAECuCCUAAAAAckUoAQAAAJArQgkAAACAXBFKAAAAAOSKUAIAAAAgV4QSAAAAALkilAAAAADIFaEEAAAAQK4IJQAAAAByRSgBAAAAkCtCCQAAAIBcEUoAAAAA5IpQAgAAACBXhBIAAAAAuSKUAAAAAMgVoQQAAABArgglAAAAAHJFKAEAAACQK0IJAAAAgFwRSgAAAADkilACAAAAIFeEEgAAAAC5IpQAAAAAyJHZ/wflBCE7cmGX5wAAAABJRU5ErkJggg=="
              }
            />
          ),
        },
      ],
    },
    {
      styles: "container row",
      backgroundImage:
        "linear-gradient(to right top, rgb(254, 183, 46), rgb(255, 166, 48), rgb(255, 148, 53), rgb(255, 130, 60), rgb(253, 113, 68))",
      Children: [
        {
          col: "col-6",
          content: (
            <img
              className={["row", styles.Image].join(" ")}
              src="https://gcs.tripi.vn/tripi-assets/images/Mobile_mockup.png"
            />
          ),
        },
        {
          col: "col-6",
          content: (
            <div
              className={[, styles.Docs].join(" ")}
              style={{ color: "white" }}
            >
              <div
                className={[
                  "row align-center justify-center",
                  styles.TitleDocs,
                ].join(" ")}
              >
                SẢN PHẨM CỦA CHÚNG TÔI
              </div>
              <div className={["row", styles.contentDocsRight].join(" ")}>
                Giải pháp công nghệ kết nối các công ty du lịch với người dùng
                bằng công cụ tìm kiếm và so sánh giá.
              </div>
            </div>
          ),
        },
      ],
    },
    {
      styles: "container row",
      Children: [
        {
          col: "col-6",
          content: (
            <div className={[, styles.Docs].join(" ")}>
              <div
                className={[
                  "row align-center justify-start",
                  styles.TitleDocs,
                ].join(" ")}
              >
                THAM GIA CÙNG CHÚNG TÔI!
              </div>
              <div
                className={[
                  "row align-center justify-center",
                  styles.contentDocsLeft,
                ].join(" ")}
              >
                Yên tâm kinh doanh với Tripi Partner. Đảm bảo lợi nhuận hàng
                tháng cho khách hàng với chính sách chiết khấu hấp dẫn. Các
                chương trình khuyến mãi kích cầu gia tăng doanh thu cho Đối tác
                diễn ra hàng tuần.
              </div>
              <Button
                className={[
                  "align-center justify-center",
                  styles.buttonDocs,
                ].join(" ")}
                color="fill"
                children={"Tham gia ngay"}
              />
            </div>
          ),
        },
        {
          col: "col-6",
          content: (
            <img
              className={[, styles.Image].join(" ")}
              src="https://tripiweb.s3-ap-southeast-1.amazonaws.com/homepage/Rectangle-14.3.png"
            />
          ),
        },
      ],
    },
  ];

  //Main render
  return BodyHome.map((item: any, key: Key) => {
    return (
      <div
        className={[styles.bodyHome, BodyHomeProps.className].join(" ")}
        key={key}
        style={
          item.backgroundImage
            ? {
                backgroundImage: `${item.backgroundImage}`,
                ...BodyHomeProps.style,
              }
            : { ...BodyHomeProps.style }
        }
      >
        {item.Title && (
          <div
            className={[
              "row align-center justify-center",
              styles.TitleBody,
            ].join(" ")}
          >
            {item.Title.toLocaleUpperCase()}
          </div>
        )}
        <div className={[item.styles, styles.Children].join(" ")}>
          {item.Children &&
            item.Children.map((el: any, reKey: Key) => {
              return (
                <div
                  className={[el.col, styles.ChildrenBody].join(" ")}
                  key={reKey}
                >
                  {el.content}
                </div>
              );
            })}
        </div>
      </div>
    );
  });
};
