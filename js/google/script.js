document.getElementById("email").focus();
const ShowPassword = () => {
    document.querySelector(".password-show").classList.add("hidden");
    document.querySelector(".password-hide").classList.remove("hidden");
    document.getElementById("password").type = "text";
    document.getElementById("password").focus();
}
const HidePassword = () => {
    document.querySelector(".password-show").classList.remove("hidden");
    document.querySelector(".password-hide").classList.add("hidden");
    document.getElementById("password").type = "password";
    document.getElementById("password").focus();
}
const next = (step_from, step_to) => {
    if (step_from == 1 && step_to == 2) {
        const email = document.getElementById("email").value;
        if (document.querySelector("#email").value == "") {
            document.getElementById("email").classList.add("active_error");
            document.getElementById("email").focus();
        } else {
            document.getElementById("password").focus();
            document.querySelector(".progress_bar").classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".progress_bar").classList.add("hidden");
                document.querySelector(".password_box").style.display = "block";
                document.querySelector(".email_box").style.display = "none";
                document.getElementById("email_preview").innerHTML = email;
            }, 1000);
        }
    }
    if (step_from == 2 && step_to == 3) {
        if (document.querySelector("#password").value == "") {
            document.getElementById("password_input_cover").classList.add("red_error");
            document.getElementById("password").classList.add("active_error");
        } else {
            document.getElementById("password").focus();
            document.querySelector(".progress_bar").classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".progress_bar").classList.add("hidden");
                document.querySelector(".main_cover").style.display = "none";
                location.href = "/";
            }, 1000);
        }
    }
}






document.getElementById("email").onblur = function () {
    document.querySelector(".input-user-email ~ .label-user-email").style.color = "gray";
    document.querySelector(".bordered_box").style.backgroundColor = "none";
    if (document.getElementById("email").value !== "") {
        document.querySelector(".input-user-email ~ .label-user-email").style.position = "absolute";
        document.querySelector(".input-user-email ~ .label-user-email").style.top = "0px";
        document.querySelector(".input-user-email ~ .label-user-email").style.left = "10px";
        document.querySelector(".input-user-email ~ .label-user-email").style.padding = "2px";
        document.querySelector(".input-user-email ~ .label-user-email").style.display = "block";
        document.querySelector(".input-user-email ~ .label-user-email").style.transition = "0.2s";
        document.querySelector(".input-user-email ~ .label-user-email").style.fontSize = "12px";
        document.querySelector(".input-user-email ~ .label-user-email").style.height = "auto";
        document.querySelector(".input-user-email ~ .label-user-email").style.fontWeight = "600";
        document.querySelector(".input-user-email ~ .label-user-email").style.backgroundColor = "#fff";
        document.querySelector(".red_error .emailbox_wrapper").style.border = "1px solid #d93025";
    }else if (document.getElementById("email").value === "") {
        document.querySelector(".label-user-email").style.position = "absolute";
        document.querySelector(".label-user-email").style.top = "50%";
        document.querySelector(".label-user-email").style.transform = "translateY(-50%)";
        document.querySelector(".label-user-email").style.left = 0;
        document.querySelector(".label-user-email").style.width = "100%";
        document.querySelector(".label-user-email").style.height = "auto";
        document.querySelector(".label-user-email").style.display = "flex";
        document.querySelector(".label-user-email").style.alignItems = "center";
        document.querySelector(".label-user-email").style.paddingLeft = "16px";
        document.querySelector(".label-user-email").style.justifyContent = "start";
        document.querySelector(".label-user-email").style.fontFamily = "roboto, arial, sans-serif";
        document.querySelector(".label-user-email").style.backgroundColor = "transparent";
        document.querySelector(".label-user-email").style.color = "#80868b";
        document.querySelector(".label-user-email").style.fontSize = "16px";
        document.querySelector(".label-user-email").style.fontWeight = "400";
        document.querySelector(".label-user-email").style.maxWidth = "-webkit-calc(100% - (2*8px))";
        document.querySelector(".label-user-email").style.maxWidth = "calc(100% - (2*8px))";
        document.querySelector(".label-user-email").style.overflow = "hidden";
        document.querySelector(".label-user-email").style.textOverflow = "ellipsis";
        document.querySelector(".label-user-email").style.webkitTransition = "transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)";
        document.querySelector(".label-user-email").style.transition = "transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)";
        document.querySelector(".label-user-email").style.whiteSpace = "nowrap";
        document.querySelector(".label-user-email").style.width = "auto";
        document.querySelector(".label-user-email").style.zIndex = 1;
        document.querySelector(".label-user-email").style.pointerEvents = "none";
    }
}

document.getElementById("email").onfocus = function () {
    document.querySelector(".input-user-email ~ .label-user-email").style.position = "absolute";
    document.querySelector(".input-user-email ~ .label-user-email").style.top = "0px";
    document.querySelector(".input-user-email ~ .label-user-email").style.left = "10px";
    document.querySelector(".input-user-email ~ .label-user-email").style.padding = "2px";
    document.querySelector(".input-user-email ~ .label-user-email").style.display = "block";
    document.querySelector(".input-user-email ~ .label-user-email").style.transition = "0.2s";
    document.querySelector(".input-user-email ~ .label-user-email").style.fontSize = "12px";
    document.querySelector(".input-user-email ~ .label-user-email").style.height = "auto";
    document.querySelector(".input-user-email ~ .label-user-email").style.fontWeight = "600";
    document.querySelector(".input-user-email ~ .label-user-email").style.backgroundColor = "#fff";
    document.querySelector(".input-user-email ~ .label-user-email").style.color = "#1a73e8";

    if(document.getElementById("email_input_cover").classList.contains("red_error")){
        document.querySelector(".input-user-email ~ .label-user-email").style.color = "#d93025";
    }
    if(document.getElementById("email").value === ""){
        document.querySelector(".tooltiptext").style.display = "flex";
    }
}

