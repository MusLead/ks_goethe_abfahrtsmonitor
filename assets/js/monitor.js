/* Bootstrap 5 provides backdrop, Escape, focus trapping and focus return. */
(function () {
    'use strict';
    function initializeMonitorModal() {
        const modal = document.getElementById('monitorModal');
        const expanded = document.getElementById('expandedMonitor');
        const label = document.getElementById('monitorModalLabel');
        if (!modal || !expanded || !label) return;
        modal.addEventListener('show.bs.modal', function (event) {
            const trigger = event.relatedTarget;
            const panel = trigger && trigger.closest('.monitor-panel');
            const source = panel && panel.querySelector('iframe');
            if (!source) {
                event.preventDefault();
                return;
            }
            label.textContent = source.title.replace(/^Monitor \d+:\s*/, '');
            expanded.title = 'Vergrößert: ' + label.textContent;
            expanded.setAttribute('src', source.getAttribute('src'));
        });
        modal.addEventListener('shown.bs.modal', function () {
            modal.querySelector('[data-bs-dismiss="modal"]').focus();
        });
        modal.addEventListener('hidden.bs.modal', function () {
            expanded.removeAttribute('src');
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeMonitorModal, { once: true });
    } else {
        initializeMonitorModal();
    }
}());
