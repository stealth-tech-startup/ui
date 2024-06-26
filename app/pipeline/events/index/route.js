import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { get } from '@ember/object';

export default class PipelineEventsIndexRoute extends Route {
  @service router;

  redirect(model = {} /* , transition */) {
    const eventId =
      get(model, 'events.firstObject.id') === undefined
        ? 0
        : get(model, 'events.firstObject.id');
    const { pipeline_id: pipelineId } = this.paramsFor('pipeline');

    if (eventId) {
      this.router.transitionTo('pipeline.events.show', pipelineId, eventId);
    }
  }
}
