// ==UserScript==
// @name         Átlag script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://klik035046001.e-kreta.hu/*
// @grant GM_addStyle
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    GM_addStyle(`
        h2,.kendoTooltip,.details .row:nth-of-type(2n),.k-header,.k-calendar .k-footer,.content-content,.sidebar-container.sidebar-open,.k-grid a, .k-grid div, .k-grid dl, .k-grid dt, .k-grid h1, .k-grid h2, .k-grid h3, .k-grid h4, .k-grid h5, .k-grid h6, .k-grid input, .k-grid label, .k-grid li, .k-grid ol, .k-grid p, .k-grid select, .k-grid span, .k-grid table, .k-grid td, .k-grid textarea, .k-grid th, .k-grid ul ,body, .main, .main-menu ul.navbar-nav>li>.dropdown-menu ,html, .main-header,.k-content, .k-editable-area, .k-panel>li.k-item, .k-panelbar>li.k-item, .k-tiles, .main-content .content-content h3, .content-container, tbody,.k-grid .k-alt,thead,.head-sidebar-tab-item {
            background: #232323 !important;
        }
        .main-header .school-title h3, a, h3{
            color: #ffa500 !important;
        }
        .main-header .usermenu .dropdown .userbar,.megamenu>li>ul>li,.k-header, .k-grid-header .k-header,.k-grid-header .k-header a, .k-grid-header .k-header span.k-link,.k-block, .k-content, .k-dropdown .k-input, .k-popup, .k-toolbar, .k-widget{
            color: #ffa500 !important;
        }
        .main-footer2,.k-calendar .k-content,.modalFooter,.panel-body{
            color: orange !important;
            background: #232323 !important;
        }
        .k-picker-wrap.k-state-default{
            background-color: #c5d3e2 !important;
            border-color: #c5d3e2 !important;
        }
        .fc-unthemed .fc-divider, .fc-unthemed .fc-popover, .fc-unthemed .fc-row, .fc-unthemed tbody, .fc-unthemed td, .fc-unthemed th, .fc-unthemed thead{
            border-color: orange !important;
        }
        .fc-event .fc-bg{
            background: null !important;
        }
        .main-content .content-content hr{
            border-color: red !important;
        }
        .k-hierarchy-cell{
            background: grey !important;
        }
    `);
})();