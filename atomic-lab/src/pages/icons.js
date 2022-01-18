import React from "react";
import logo from "../icons/logo.png";
import home from "../icons/home.png";
import add from "../icons/add.png";
import active from "../icons/active.png";
import finish from "../icons/finish.png";
import search from "../icons/search.png";
import notifications from "../icons/notifications.png";
import credits from "../icons/credits.png";
import arrow_down from "../icons/arrow-down.png";
import help from "../icons/help.png";
import help_circle from "../icons/help-circle.png";
import status_check_1 from "../icons/status-check-1.png";
import status_check_2 from "../icons/status-check-2.png";
import status_check_3 from "../icons/status-check-3.png";
import status_check_4 from "../icons/status-check-4.png";
import private_notes from "../icons/private-notes.png";
import last_version from "../icons/last-version.png";
import add_plus from "../icons/add-plus.png";
import review from "../icons/review.png";
import menu_points from "../icons/menu-points.png";
import retro_review from "../icons/retro-review.png";
import test_review from "../icons/test-review.png";
import start_off from "../icons/start-off.png";
import start_on from "../icons/start-on.png";
import last_comments from "../icons/last-comments.png";
import download from "../icons/download.png";

export const Icons = (icon) => {
  const listIcons = {
    logo: logo,
    home: home,
    add: add,
    active: active,
    finish: finish,
    search: search,
    notifications: notifications,
    credits: credits,
    arrow_down: arrow_down,
    help: help,
    help_circle: help_circle,
    status_check_1: status_check_1,
    status_check_2: status_check_2,
    status_check_3: status_check_3,
    status_check_4: status_check_4,
    private_notes: private_notes,
    last_version: last_version,
    add_plus: add_plus,
    review: review,
    menu_points: menu_points,
    retro_review: retro_review,
    test_review: test_review,
    start_off: start_off,
    start_on: start_on,
    last_comments: last_comments,
    download: download,
  };

  return <img src={listIcons[icon]} alt={icon} />;
};
